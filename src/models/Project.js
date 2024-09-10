const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    technologies: [String],
    image: {type: String, required: false},
    link: {type: String, required: false},
    github: String,
    description: {type: String, required: true}
  },
  {
    timestamps: true
  }
)

const Project = mongoose.model("Project", projectSchema)
module.exports = Project;