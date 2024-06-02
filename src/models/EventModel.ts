import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Statuses = ["Pending", "Approved", "Rejected"];

const EventSchema = new Schema(
  {
    eventName: { type: String, required: true },
    companyName: { type: String, required: true },
    proposedDates: { type: [Date], required: true },
    location: { type: String, required: true },
    eventId: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    status: { type: String, enum: Statuses, default: "Pending" },
    remarks: { type: String, default: null },
    confirmedDate: { type: Date, default: null },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Events", EventSchema);

export default Event;
