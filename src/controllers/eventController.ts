import { Request, Response } from "express";

import {
  createEventService,
  deleteEventService,
  getEventByIdService,
  getEventsService,
  updateEventService,
} from "@/services/eventService";

export const createEvent = (req: Request, res: Response) => {
  createEventService(req.body, ({ code = 500, data, message }) => {
    res.status(code).json({
      code,
      data,
      message,
    });
  });
};

export const getEvents = (req: Request, res: Response) => {
  getEventsService(({ code = 500, data, message }) => {
    res.status(code).json({
      code,
      data,
      message,
    });
  });
};

export const getEventById = async (req: Request, res: Response) => {
  getEventByIdService(req.params, ({ code = 500, data, message }) => {
    res.status(code).json({
      code,
      data,
      message,
    });
  });
};

export const updateEvent = async (req: Request, res: Response) => {
  updateEventService(req.params, req.body, ({ code = 500, data, message }) => {
    res.status(code).json({
      code,
      data,
      message,
    });
  });
};

export const deleteEvent = async (req: Request, res: Response) => {
  deleteEventService(req.params, ({ code = 500, data, message }) => {
    res.status(code).json({
      code,
      data,
      message,
    });
  });
};
