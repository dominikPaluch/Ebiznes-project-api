import * as mongoose from 'mongoose';

export const ReservationSchema = new mongoose.Schema({
  userID: Number,
  totalPrice: Number,
  status: String,
  start: Date,
  stop: Date,
});
