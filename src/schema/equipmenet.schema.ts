import * as mongoose from 'mongoose';

export const EquipmentSchema = new mongoose.Schema({
    name: String,
    price: Number,
    status: String,
});
