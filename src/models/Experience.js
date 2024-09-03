const mongoose = require("mongoose");
const experienceSchema = new mongoose.Schema(
  {
    company: {type: String, required: true},
    address: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String
  },
  {
    timestamps: true
  }
)

const Experience = mongoose.model("Experience", experienceSchema)
module.exports = Experience;