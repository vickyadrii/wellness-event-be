// Event Schema
import Event from "@/models/EventModel";
import { EventType } from "@/types/event";

// All types
import { ResponseJSON } from "@/types/response";

export const createEventService = async (payload: EventType, response: ResponseJSON) => {
  const { event_name, company_name, proposed_dates, location, event_id, created_by } = payload;

  try {
    const newEvents = new Event({ event_name, company_name, proposed_dates, location, event_id, created_by });
    const events = await newEvents.save();
    response({
      code: 201,
      message: "Create event successfully!",
      data: events,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response({ message: error.message });
    }
  }
};

export const getEventsService = async (response: ResponseJSON) => {
  try {
    const events = await Event.find().populate("created_by", "username");
    response({
      code: 200,
      message: "Get events successfully!",
      data: events,
    });
    return;
  } catch (error) {
    if (error instanceof Error) {
      return response({
        code: 400,
        message: error.message,
        data: null,
      });
    } else {
      return response({
        code: 500,
        message: "Oops, something wrong!",
        data: null,
      });
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEventByIdService = async (params: any, response: ResponseJSON) => {
  const { id } = params;

  try {
    const event = await Event.findById(id).populate("created_by", "username");
    if (!event) {
      return response({
        code: 404,
        message: "Event not found!",
        data: null,
      });
    }

    response({
      code: 200,
      message: "Get event successfully!",
      data: event,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response({
        code: 400,
        message: error.message,
        data: null,
      });
    } else {
      return response({
        code: 500,
        message: "Oops, something wrong!",
        data: null,
      });
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateEventService = async (params: any, payload: EventType, response: ResponseJSON) => {
  const { id } = params;
  const { event_name, company_name, proposed_dates, location, status, remarks, confirmed_date } = payload;

  try {
    const event = await Event.findByIdAndUpdate(
      id,
      { event_name, company_name, proposed_dates, location, status, remarks, confirmed_date },
      { new: true, runValidators: true }
    );

    if (!event) {
      return response({
        code: 404,
        message: "event not found!",
        data: null,
      });
    }

    response({
      code: 200,
      message: "Update event successfully!",
      data: event,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response({
        code: 400,
        message: error.message,
        data: null,
      });
    } else {
      return response({
        code: 500,
        message: "Oops, something wrong!",
        data: null,
      });
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteEventService = async (params: any, response: ResponseJSON) => {
  const { id } = params;

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return response({
        code: 404,
        message: "event not found!",
        data: null,
      });
    }

    response({
      code: 200,
      message: "Delete event successfully!",
      data: null,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response({
        code: 400,
        message: error.message,
        data: null,
      });
    } else {
      return response({
        code: 500,
        message: "Oops, something wrong!",
        data: null,
      });
    }
  }
};
