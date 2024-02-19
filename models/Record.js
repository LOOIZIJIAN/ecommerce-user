import {model, models, Schema} from "mongoose";

const RecordSchema = new Schema({
  line_items:Object,
  account: String,
  name:String,
  email:String,
  city:String,
  postalCode:String,
  streetAddress:String,
  country:String,
  paid:Boolean,
}, {
  timestamps: true,
});

export const Record = models?.Record || model('Record', RecordSchema);