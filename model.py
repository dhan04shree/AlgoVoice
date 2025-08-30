import os
import json
import google.generativeai as genai
from google.generativeai.types import GenerationConfig
from google.api_core.exceptions import GoogleAPIError

# Ensure your GEMINI_API_KEY is set as an environment variable.
# Example: export GEMINI_API_KEY='your_api_key_here'
# The library will automatically pick up this key.
genai.configure(api_key='AIzaSyBF447xLyi-1u2v1n--22tYyMFTxCQ5Iww')
def analyze_transcript_with_gemini(transcript):
    """
    Sends a transcript to a Gemini model and requests a structured JSON response.
    """
    try:
        # Initialize the model using the older, but still supported, library.
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        # This is a robust prompt that instructs the model to act as an assistant and output JSON.
        prompt = f"""
        You are an AI assistant analyzing a coding explanation.
        Output JSON with keys: "concepts" (array of main topics), "mistakes" (array of incorrect points), "summary" (string).
        Transcript:
        {transcript}
        Respond ONLY in JSON format.
        """
        
        # Use a `GenerationConfig` to ensure the model produces a concise response.
        generation_config = GenerationConfig(max_output_tokens=1024)
        
        response = model.generate_content(
            prompt,
            generation_config=generation_config
        )
        
        # The model's response might have extra text outside the JSON.
        # This code finds the first '{' and the last '}' to isolate the JSON string.
        raw_text = response.text.strip()
        start_index = raw_text.find('{')
        end_index = raw_text.rfind('}')
        
        if start_index == -1 or end_index == -1:
            raise ValueError("No valid JSON object found in the model's response.")
            
        json_string = raw_text[start_index : end_index + 1]
        
        return json.loads(json_string)

    except GoogleAPIError as api_err:
        print(f"Google API Error: {api_err}")
        return None
    except json.JSONDecodeError as json_err:
        print(f"Failed to parse JSON. Error: {json_err}")
        print(f"Raw response: {raw_text}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

# --- Main part of the script ---
if __name__ == "__main__":
    coding_transcript = "Machine learning is a subfield of artificial intelligence which concern with developing computational theories of learning and building learning machines. Learning is a phenomenon and process which can manifestations of various aspects."
    
    result = analyze_transcript_with_gemini(coding_transcript)
    
    if result:
        print("Success! Parsed JSON response:")
        print(json.dumps(result, indent=2))
    else:
        print("Script failed to return a valid result.")
