import { Schema, model } from "mongoose"

const studiesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      unique: true
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  }
)

const Studies = model("Studies", studiesSchema)

export default Studies