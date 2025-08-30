import axios from "axios";
import { transcribeAudio } from "./transcribeAudio.js";
import dotenv from "dotenv";

dotenv.config();

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY;

export const analyzeWithGemini = async (transcript) => {
  const prompt = `
You are an AI assistant analyzing a coding explanation.
Return ONLY valid JSON with the following structure:
{
  "concepts": ["list of main coding topics"],
  "mistakes": ["list of incorrect or misleading points"],
  "summary": "brief summary in 2-3 sentences"
}

Transcript:
${transcript}
  `;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          responseMimeType: "application/json"
        }
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const rawText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

    let result;
    try {
      result = JSON.parse(rawText);
    } catch (err) {
      console.error("Failed to parse Gemini JSON:", rawText);
      result = { concepts: [], mistakes: [], summary: rawText };
    }
// console.log(result);
    return result;
  } catch (err) {
    console.error("Gemini analysis error:", err.response?.data || err.message);
    throw err;
  }
};

export const analysisAudio = async (cloudinaryUrl) => {
  const transcript = await transcribeAudio(cloudinaryUrl);
  const analysis = await analyzeWithGemini(transcript);
  // console.log(analysis);
  return { analysis };
};

// import axios from "axios"; 
// import { transcribeAudio } from "./transcribeAudio.js";
// const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"; 
// const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY; 
// export const analyzeWithHuggingFace = async (transcript) => {
//    const prompt = `You are an AI assistant analyzing a coding explanation. Output JSON with keys: "concepts" (array of main topics), "mistakes" (array of incorrect points), "summary" (string). Transcript: ${transcript} Respond ONLY in JSON format.`
//    try { 
//    const response = await axios.post(
//      HUGGINGFACE_API_URL, { inputs: prompt },
//       { headers: { Authorization: `Bearer ${HUGGINGFACE_API_KEY}`, 
//       "Content-Type": "application/json", },
//      } ); // HuggingFace sometimes returns a plain string, so parse safely 
//      const text = response.data?.[0]?.generated_text || "{}";
//       let result; try { result = JSON.parse(text); 

//       } catch (err) { 
//         // fallback: send entire text as summary
//          result = { concepts: [], mistakes: [], summary: text };
//          } 
//          return result; 
//         } 
//         catch (err) { 
//           console.error("HuggingFace analysis error:", err.message);
//            throw err; 
//           }
//          }; 
//          export const analysisAudio = async (cloudinaryUrl) => { 
//           const transcript = await transcribeAudio(cloudinaryUrl);
//            const analysis = await analyzeWithHuggingFace(transcript); 
//            return {  analysis }; 
//    };
