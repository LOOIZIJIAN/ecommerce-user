import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function handle (req, res){
  await mongooseConnect();
  const name = req.body.name;
  res.json(await Category.find({name:name}));
} 