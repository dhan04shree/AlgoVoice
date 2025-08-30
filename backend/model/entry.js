import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    queUrl: {
      type: String,
      default: "",
    },
    voiceUrl: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transcription: {
      type: String,
      default: "",
    },
    smartNotes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Entry = mongoose.model("Entry", entrySchema);
