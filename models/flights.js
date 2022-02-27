import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    default: 'DEN', 
    enum: ['AUS', 'DFW', 'LAX', 'DEN', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999 
  },
  departs: {
    type: Date,
    default: function() {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
  }
})