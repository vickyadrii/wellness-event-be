import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Statuses = ["Pending", "Approved", "Rejected"];

const EventSchema = new Schema(
  {
    event_name: { type: String, required: true },
    company_name: { type: String, required: true },
    proposed_dates: { type: [Date], required: true },
    location: { type: String, required: true },
    event_id: { type: String, required: true },
    date_created: { type: Date, default: Date.now },
    status: { type: String, enum: Statuses, default: "Pending" },
    remarks: { type: String, default: null },
    confirmed_date: { type: Date, default: null },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Events", EventSchema);

export default Event;
