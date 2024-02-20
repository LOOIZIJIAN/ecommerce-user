import {model, models, Schema} from "mongoose";

const RecordSchema = new Schema({
  line_items:Object,
  account: String,
}, {
  timestamps: true,
});

export const Record = models?.Record || model('Record', RecordSchema);