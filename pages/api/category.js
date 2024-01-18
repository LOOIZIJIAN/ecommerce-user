import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function handler(req, res) {
  await mongooseConnect();
  const categories = await Category.find();
  res.status(200).json(categories);
}