const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessPhotoSchema = new Schema({
  business: {
    type: Schema.Types.ObjectId,
    ref: "business",
    required: true
  },
  uploader: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  uploaderUsername: {
    type: "String",
    required: true
  },
  photoURL: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = BusinessPhoto = mongoose.model("businessphoto", BusinessPhotoSchema);
