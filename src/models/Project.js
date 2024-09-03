const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    technologies: [String],
    image: String,
    link: String,
    github: String,
    description: {type: String, required: true},
    date: {type: Date, default: Date.now()}
  },
  {
    timestamps: true
  }
)

const Project = mongoose.model("Project", projectSchema)
module.exports = Project;