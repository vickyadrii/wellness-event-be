import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Roles = ["HR", "VENDOR"];

const UserSchema = new Schema(
  {
    username: { type: String, required: [true, "Username is required!"] },
    password: { type: String, required: [true, "Password is required!"] },
    role: { type: String, enum: Roles, required: true },
    company_name: { type: String, required: false, default: null },
    vendor_name: { type: String, required: false, default: null },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", UserSchema);

export default User;
