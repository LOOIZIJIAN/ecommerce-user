const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
  username: {type:String, require:true},
  email: {type:String, require:true},
  password: {type:String, require:true},
})

export const User = models.User || model('User', UserSchema);