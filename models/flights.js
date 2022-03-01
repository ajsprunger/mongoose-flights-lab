import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },  
  price: {
    type: Number,
    min: 0,
    max: 99999
  }
}, {
  timestamps: true
})

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
  }, 
  tickets: [ticketSchema]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}