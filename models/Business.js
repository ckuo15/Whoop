const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  hours: {
    type: Schema.Types.Mixed,
    required: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  phone: {
    type: String,
    required: true
  },
  price_range: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Business = mongoose.model('business', BusinessSchema);