import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function handler(req, res) {
  await mongooseConnect();
  res.json(await Category.find());
    // if(req.query?.id){
    //   res.json(await Category.findOne({_id: req.query.id}));
    // }else{
     
    // }
}