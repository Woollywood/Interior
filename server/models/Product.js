import mongoose from "mongoose";

const Product = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String },
  discount: { type: Number },
  isNew: { type: Boolean },
});

export default mongoose.model("Product", Product);
