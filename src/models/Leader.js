const mongoose = require("mongoose");
const leaderSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    level: String
  },
  {
    timestamps: true
  }
)

const Leader = mongoose.model("Leader", leaderSchema)
module.exports = Leader;