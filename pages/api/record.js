import { mongooseConnect } from "@/lib/mongoose";
import { Record } from "@/models/Record";

export default async function handler(req, res){
  await mongooseConnect();
  const {method} = req.body;

  if(method === 'GET'){
    const {account} = req.query;
    const record = await Record.findMany({account})
    return res.status(200).json(record);
  }

    
}