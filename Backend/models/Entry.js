const mongoose = require("mongoose")

const EntrySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },

  score: {
    type: Number,
    required: true
  },

  notes: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Entry", EntrySchema)