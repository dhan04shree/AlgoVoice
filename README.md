Overview

AlgoVoice is a web-based platform that helps students practice and revise Data Structures and Algorithms (DSA) using the “think aloud” method. Instead of only writing code, students explain their solutions verbally. The website records these explanations, provides transcriptions, and uses AI to give feedback on clarity and correctness. This makes revision more effective by combining coding, reasoning, and self-explanation in one place.

Problem

When preparing for DSA, students often focus only on solving problems in code. This misses an important part of learning: explaining the logic clearly. Without explaining, it’s harder to identify weak concepts, logical gaps, or unclear reasoning. Traditional platforms don’t encourage active recall and verbal practice, which are key to mastering problem-solving.

Features

Voice Recording : record your explanation of a DSA solution directly on the website.

Transcription : get your voice converted to text using speech-to-text APIs.

AI Feedback : Gemini API analyzes your explanation and points out gaps or mistakes.

Practice History : store explanations for later review.

Revision Support : revisit past explanations and track improvement over time.

User-Friendly UI : simple, distraction-free interface built with React and TailwindCSS.

Tech Stack

Frontend: React, TailwindCSS

Backend: Node.js, Express

Database: MongoDB

Speech-to-Text: AssemblyAI

AI Analysis: Google Gemini API
How It Works

User selects a DSA problem to practice.

They record their spoken explanation through the website.

The audio is transcribed into text.

Transcription is sent to the backend for processing.

Gemini API analyzes the reasoning and generates feedback.

The explanation, feedback, and transcription are stored for future review.

Requirements

Node.js & npm

React with TailwindCSS

MongoDB

AssemblyAI API Key

Google Gemini API key
