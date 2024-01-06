import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export default async function handler(req, res){
  await mongooseConnect();

  if (req.method !== 'POST') {
    res.json('should be a POST request');
    return;
  }

  if (req.method === 'POST') {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
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
      hashedPassword: hashedPassword,
    });
  
    res.json(register);
  }
  
}