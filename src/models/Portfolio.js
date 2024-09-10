const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const portfolioSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    bio: String,   // A short biography
    projects: [{
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true
    }],   // Array of projects
    skills: [String],  // Array of skills
    experienceWithLevel: [{
      level: String,
      startDate: {type: Date, required: true, default: Date.now},
      endDate: {type: Date, required: false},
      experience: {
        type: Schema.Types.ObjectId,
        ref: "Experience",
        required: true
      }
    }], // Array of experience entries
    contactInfo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    extra: {
      quote: String,
      leader: {
        type: Schema.Types.ObjectId,
        ref: "Leader"
      }
    }
  },
  {
    timestamps: true
  }
)

const Portfolio = model("Portfolio", portfolioSchema)
module.exports = Portfolio;