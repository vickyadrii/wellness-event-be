import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VendorSchema = new Schema(
  {
    vendorName: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Events" }],
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendors", VendorSchema);

export default Vendor;
