import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";

export default async function handler(req, res){
  await mongooseConnect();

  if (req.method !== 'POST') {
    res.json('should be a POST request');
    return;
  }

  // if (method === 'GET') {
  //   if (req.query?.id) {
  //     res.json(await Product.findOne({_id:req.query.id}));
  //   } else {  
  //     res.json(await Product.find());
  //   }
  // }

  if(req.method === 'POST'){
    const {username, email, password} = req.body;
    const register = await User.create({
      username,
      email,
      password,
    })
    res.json(register);
  }

}