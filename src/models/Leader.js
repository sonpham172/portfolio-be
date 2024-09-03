const mongoose = require("mongoose");
const leaderSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    joinedAt: Date,
    rejectedAt: {type: Date, required: false, default: null},
    level: String
  },
  {
    timestamps: true
  }
)

const Leader = mongoose.model("Leader", leaderSchema)
module.exports = Leader;