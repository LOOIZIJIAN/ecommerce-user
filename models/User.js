const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
  username: {type:String, require:true},
  email: {type:String, require:true, unique:true},
  hashedPassword: { type: String, required: true },
  otp: {type:Number},
})

export const User = models.User || model('User', UserSchema);