import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VoiceRecorder from "../components/voiceRecorder"; 

const VoiceEntryForm = () => {
    const navigate = useNavigate(); 
  const [question, setTitle] = useState('');
  const [solutionText, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [voiceUrl, setVoiceUrl] = useState('');
  const [queUrl, setQueUrl] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      question,
      solutionText,
      tags: tags.split(',').map(tag => tag.trim()),
      voiceUrl,
      queUrl
    };

    try {
      const res = await fetch('http://localhost:3001/api/algovoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
        if (res.ok) {
        alert('Entry saved successfully!');
        navigate('/'); 
      } else {
        alert('Error saving entry.');
      }
      
    } catch (err) {
      console.error(err);
      // alert('Error saving entry.');
    }
  };

  return (
    <div className="text-white mt-5 max-w-xl mx-auto p-6 bg-[#080f15] rounded shadow space-y-4">
      <h1 className="text-lg font-bold text-center">New AlgoVoice Entry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <textarea type="text" placeholder="Question Title" value={question} onChange={(e) => setTitle(e.target.value)} className="w-full border p-2 rounded bg-gray-800 text-white" required/>

        <input type="url" placeholder="Question Url" value={queUrl} onChange={(e) => setQueUrl(e.target.value)} className="w-full border p-2 rounded bg-gray-800 text-white" />

        <textarea placeholder="Solution Description" value={solutionText} onChange={(e) => setDescription(e.target.value)} className="w-full border p-2 rounded bg-gray-800 text-white" rows={4}  />

        <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} className="w-full border p-2 rounded bg-gray-800 text-white"/>

        <VoiceRecorder onUpload={(url) => setVoiceUrl(url)} />

        {voiceUrl && (
          <div className="text-sm text-green-600">🎧 Voice recording uploaded.</div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Save Entry
        </button>
      </form>
    </div>
  );
};

export default VoiceEntryForm;
