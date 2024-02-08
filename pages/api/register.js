import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
export default async function handler(req, res) {
  await mongooseConnect();

  if (req.method !== 'POST' && req.method !== 'PUT') {
    res.json('should be a POST or PUT request');
    return;
  }

  if (req.method === 'POST') {
    const { username, email, password, otp } = req.body;
  
    if (!username || !email || !password || !otp) {
      return new NextResponse('Missing Fields', { status: 400 });
    }
  
    const exist = await User.findOne({ email: email });
    if (exist) {
      throw new Error('Email exists');
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const register = await User.create({
      username,
      email,
      hashedPassword: hashedPassword, // Assuming your model expects 'password' field
      otp,
    });
  
    res.json(register);
  }
}
