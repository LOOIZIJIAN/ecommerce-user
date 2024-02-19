import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  try {
    await mongooseConnect();
    if (req.method === "GET") {
      const { email } = req.query;

      if (!email) return res.status(400).json({ error: "Email is required" });

      const user = await User.findOne({ email });
      if (!user) {
        console.log(`User not found for email: ${email}`);
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } else if (req.method === "PUT") {
      const { email, newPassword, newOtp } = req.body;
      if (!email || !newPassword || !newOtp) {
        return res
          .status(400)
          .json({ error: "Email, newPassword, and newOtp are required" });
      }
      try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const user = await User.findOneAndUpdate(
          { email },
          { $set: { hashedPassword: hashedPassword, otp: newOtp } },  //  
          { new: true }
        );
        if (!user) return res.status(404).json({ error: "User not found" });

        return res
          .status(200)
          .json({ message: "Password and OTP updated successfully" });
      } catch (error) {
        console.error("Error updating password and OTP:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
