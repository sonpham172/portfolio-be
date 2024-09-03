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
      type: "Project",
      required: true
    }],   // Array of projects
    skills: [String],  // Array of skills
    education: String,
    experience: [{
      type: Schema.Types.ObjectId,
      type: "Experience",
      required: true
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