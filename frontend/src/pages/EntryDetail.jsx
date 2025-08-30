import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

const EntryDetail = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [trans,setTrans] = useState(null);
  const [analysis,setAnalysis] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice/${id}`)
      .then(res => setEntry(res.data))
      .catch(err => console.error(err));
  }, [id]);
  // console.log("eee",entry);

  if (!entry) return <p>Loading...</p>;

  const handleTranscribe = async ()=>{
    try{
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice/${id}/entry`)
        .then(res => setTrans(res.data))
        .catch(err => console.error(err));
    }catch{
      console.error(err);
    }  
  }
    const handleAnalysis = async ()=>{
    try{
      handleTranscribe();
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice/${id}/analysis`)
        .then(res => setAnalysis(res.data))
        .catch(err => console.error(err));
    }catch{
      console.error(err);
    }  
  }
  // console.log(analysis);

  return (
    <div className="p-4 max-w-xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-2">{entry.question}</h2>

      <audio controls className="w-full my-4">
        <source src={entry.voiceUrl} type="audio/webm" />
        Your browser does not support the audio element.
      </audio>

      <button className='mb-2 w-full bg-blue-500/50 hover:bg-blue-500/80 text-white py-2 rounded-lg  transition-colors duration-200'><a href={entry.queUrl}>Question Link</a></button>
      {/* <button className='mb-2 w-full bg-blue-500/50 hover:bg-blue-500/80 text-white py-2 rounded-lg  transition-colors duration-200' onClick={handleTranscribe}>View Transcribe</button> */}
      <button className='mb-2 w-full bg-blue-500/50 hover:bg-blue-500/80 text-white py-2 rounded-lg  transition-colors duration-200' onClick={handleAnalysis}>Analyse with AI</button>

      <div className='flex'>
              {entry.tags.map((tag)=>(
              <div className='text-blue-500'>#
                <a className=' hover:underline' href=''>{tag}</a>&nbsp;&nbsp;
              </div>
            ))}
            </div>
            {trans && 
             <div className="mt-6">
            <h3 className="text-lg">Transcription:</h3>
            <p className="pb-4 rounded">{trans}</p>
            </div>
            }

            {analysis && 
        <div>
   
     <h3>Concepts:</h3>
      <ul className='pb-4'>
        {analysis.analysis?.concepts?.length > 0 ? (
        analysis.analysis.concepts.map((c, idx) => <li key={idx}>{c}</li>)
      ) : (
        <li>No concepts found</li>
      )}
      </ul>

      <h3>Mistakes:</h3>
      <ul className='pb-4'>
        {analysis.analysis?.mistakes?.length > 0 ? (
        analysis.analysis.mistakes.map((m, idx) => <li key={idx}>{m}</li>)
      ) : (
        <li>No mistakes found</li>
      )}
      </ul>

      <h3>Summary:</h3>
      <p className='pb-4'>{analysis.analysis?.summary || "No summary available"}</p>
    </div>
            }
     
    </div>
  );
};

export default EntryDetail;
