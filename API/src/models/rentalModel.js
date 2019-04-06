import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RentalSchema = new Schema({

  rego: {
    type: String,
    required: true
  }
  
},
{
  timestamps: {
  createdAt: "created_at",
  updatedAt: "updated_at"}
})
