import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


const API_KEY = process.env.ASSEMBLYAI_APIKEY;
const BASE_URL = "https://api.assemblyai.com/v2";
export const transcribeAudio = async (cloudinaryUrl) => {
  try {
    // Create transcription job
    const response = await axios.post(
      `${BASE_URL}/transcript`,
      { audio_url: cloudinaryUrl },
      {
        headers: {
          authorization: API_KEY,
          "content-type": "application/json",
        },
      }
    );

    const transcriptId = response.data.id;

    // Poll until transcription is complete
    let transcript;
    while (true) {
      const polling = await axios.get(`${BASE_URL}/transcript/${transcriptId}`, {
        headers: { authorization: API_KEY },
      });
      transcript = polling.data;
      if (transcript.status === "completed" || transcript.status === "error") break;
      await new Promise((r) => setTimeout(r, 3000)); 
    }

    if (transcript.status === "completed") {
      return transcript.text;
    } else {
      throw new Error("Transcription failed: " + transcript.error);
    }
  } catch (err) {
    console.error("Transcription error:", err.message);
    throw err;
  }
};