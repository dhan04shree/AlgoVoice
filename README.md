
# AlgoVoice

A web-based platform that helps students practice and revise coding problems like DSA. Instead of only writing code, students explain their solutions verbally. The website records these explanations, provides transcriptions, and uses AI to give feedback on clarity and correctness. This makes revision more effective by combining coding, reasoning, and self-explanation in one place.


## Problem Statement
When preparing for DSA, students often focus only on solving problems in code. This misses an important part of learning: explaining the logic clearly. Without explaining, it’s harder to identify weak concepts, logical gaps, or unclear reasoning. Traditional platforms don’t encourage active recall and verbal practice, which are key to mastering problem-solving.
## Key Features

- **Voice Recording** - record your explanation of a DSA solution directly on the website.

- **Transcription** – get your voice converted to text using speech-to-text APIs.

- **AI Feedback** – Gemini API analyzes your explanation and points out gaps or mistakes.

- **Practice History** – store explanations for later review.

- **Revision Support** – revisit past explanations and track improvement over time.

- **User-Friendly UI** – simple, distraction-free interface built with React and TailwindCSS.


## Tech Stack

**Frontend :**  React, TailwindCSS

**Backend :** Node.js, Express.js

**Authentication :**  JWT

**Database :** MongoDB

**Speech-to-Text :** AssemblyAI

**AI Analysis :** Google Generative AI


## Quick Start
Follow these steps to set up AlgoVoice locally:

**1. Clone the repository**
```bash
git clone https://github.com/<your-username>/algovoice.git
cd algovoice
```

**2. Install Dependencies**
```bash
npm install
```
**3. Setup Environment Variables**

Create a ```.env``` file in the backend folder and add your following keys : 

```
# Server Config
PORT=3000

# Database Configuration
MONGO_URL=your_mongodb_connection_string

# JWT Secret Key
KEY=your_jwt_secret_key

# Google Gemini API
GOOGLE_API_KEY=your_gemini_api_key
ASSEMBLYAI_APIKEY=your_assembly_ai_api_key

# Cloudinary Config
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173
```
### 4. Database Setup (MongoDB)
AlgoVoice uses MongoDB to store user details, voice recordings, transcriptions, and AI feedback.

**1. Create a MongoDB Cluster**

- Go to MongoDB Atlas (free cloud database).
- Sign up and create a new cluster.
- Choose Shared Cluster (free tier is enough).

**2. Get Your Connection String**

- Once the cluster is created, click Connect → Connect your application.

- Copy the connection string, it will look like this:
``` 
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/algovoice?retryWrites=true&w=majority
```
**3. Add to ```.env```**

Update your .env file with the copied URL : 
```
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/algovoice
```
### 5. Run the Development Server
**Backend**
``` 
node index.js
```
**Frontend**
```
npm run dev 
```
The app will be available at http://localhost:5173/ (Vite default).

### 6. API Key Setup

AlgoVoice integrates with **AssemblyAI** for speech-to-text transcription and **Google Gemini API** for AI-powered feedback.

**1. AssemblyAI API Key**
- Go to [AssemblyAI Dashboard](https://www.assemblyai.com/) and create a free account.  
- Get your API key from the dashboard.  
- Add it to your `.env` file:
 ```
ASSEMBLYAI_APIKEY=your_assemblyai_api_key_here
 ```
**2. Google Gemini API Key**

Visit [Google AI Studio](https://aistudio.google.com/?utm_source=chatgpt.com)
 and generate an API key for Gemini.

Add it to your ```.env``` file:
```
GOOGLE_API_KEY=your_google_gemini_api_key_here
```
⚠️ Important: Never commit your ```.env``` file to GitHub. Add it to ```.gitignore```
