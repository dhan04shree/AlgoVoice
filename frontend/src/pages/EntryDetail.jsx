import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EntryDetail = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [trans, setTrans] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice/${id}`);
        setEntry(res.data);
      } catch (err) {
        console.error('Error fetching entry:', err);
      }
    };
    fetchEntry();
  }, [id]);

  if (!entry) return <p>Loading...</p>;

  const handleTranscribe = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice/${id}/entry`);
      setTrans(res.data);
      return res.data;
    } catch (err) {
      console.error('Transcription error:', err);
      throw err;
    }
  };

  const handleAnalysis = async () => {
    try {
      setLoading(true);
      const transcript = await handleTranscribe(); // Wait for transcription first
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice/${id}/analysis`, {
        transcript,
      });
      setAnalysis(res.data);
    } catch (err) {
      console.error('Analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-2">{entry.question}</h2>

      <audio controls className="w-full my-4">
        <source src={entry.voiceUrl} type="audio/webm" />
        Your browser does not support the audio element.
      </audio>

      <button
        className="mb-2 w-full bg-blue-500/50 hover:bg-blue-500/80 text-white py-2 rounded-lg transition-colors duration-200"
      >
        <a href={entry.queUrl} target="_blank" rel="noopener noreferrer">
          Question Link
        </a>
      </button>

      <button
        className="mb-2 w-full bg-blue-500/50 hover:bg-blue-500/80 text-white py-2 rounded-lg transition-colors duration-200"
        onClick={handleAnalysis}
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze with AI'}
      </button>

      <div className="flex flex-wrap gap-2 mt-2">
        {entry.tags.map((tag, i) => (
          <span key={i} className="text-blue-400">#{tag}</span>
        ))}
      </div>

      {trans && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Transcription:</h3>
          <p className="pb-4 rounded">{trans}</p>
        </div>
      )}

      {analysis && (
  <div className="mt-6">
    <h3 className="font-semibold">Concepts:</h3>
    <ul className="pb-4">
      {(analysis.concepts?.length > 0 ? analysis.concepts : ["No concepts found"]).map(
        (c, idx) => <li key={idx}>{c}</li>
      )}
    </ul>

    <h3 className="font-semibold">Mistakes:</h3>
    <ul className="pb-4">
      {(analysis.mistakes?.length > 0 ? analysis.mistakes : ["No mistakes found"]).map(
        (m, idx) => <li key={idx}>{m}</li>
      )}
    </ul>

    <h3 className="font-semibold">Summary:</h3>
    <p className="pb-4">{analysis.summary || "No summary available"}</p>
  </div>
)}

    </div>
  );
};

export default EntryDetail;
