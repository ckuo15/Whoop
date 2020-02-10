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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Business = mongoose.model('business', BusinessSchema);