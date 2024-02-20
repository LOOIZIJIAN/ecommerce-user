import { mongooseConnect } from "@/lib/mongoose";
import { Record } from "@/models/Record";

export default async function handler(req, res) {
  try {
    await mongooseConnect();
    
    const { method } = req;

    if (method === 'GET') {
      const { account } = req.query;
      return res.status(200).json(await Record.find({ account }));
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
