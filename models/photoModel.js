import mongoose from 'mongoose';

const { Schema } = mongoose;

const photoSchema = new Schema({
  name: {
    type: String,
    required: true, // Name girilmesi zorunlu olduğunu bildirir.
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true, // metinin başındaki ve sonundaki boşlukları siler.
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
