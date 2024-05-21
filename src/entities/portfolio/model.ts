import { Schema, model } from "mongoose"

const portfolioSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Portfolio = model("Portfolio", portfolioSchema)

export default Portfolio