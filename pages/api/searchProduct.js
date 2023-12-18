import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle (req, res){
  await mongooseConnect();
  const title = req.body.title;
  res.json(await Product.find({title:title}));
} 