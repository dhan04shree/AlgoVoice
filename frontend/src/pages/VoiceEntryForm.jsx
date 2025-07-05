import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VoiceRecorder from "../components/voiceRecorder"; 

const VoiceEntryForm = () => {
    const navigate = useNavigate(); 
  const [question, setTitle] = useState('');
  // const [solutionText, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [voiceUrl, setVoiceUrl] = useState('');
  const [queUrl, setQueUrl] = useState('');
const [isUploading, setIsUploading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!voiceUrl) {
        return;
      }
    const payload = {
      question,
      // solutionText,
      tags: tags.split(',').map(tag => tag.trim()),
      voiceUrl,
      queUrl
    };
    console.log(payload);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
         },
        body: JSON.stringify(payload),
      });
        if (res.ok) {
        alert('Entry saved successfully!');
        navigate('/showentry'); 
      } else {
        alert('Error saving entry.');
      }
      
    } catch (err) {
      console.error(err);
      alert('Error saving entry.');
    }
  };

  return (
    <div className=" mt-5 max-w-xl mx-auto p-6 text-white rounded shadow space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold text-white-800 mb-6">Record Your Algorithm Approach</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="QuestionText" className='text-lg'>Title</label>
        <textarea id='QuestionText' type="text" placeholder="Question Title" value={question} onChange={(e) => setTitle(e.target.value)} className="bg-gray-800 text-white mb-4 mt-2 w-full border border-white  p-2 rounded" required/>
          <label htmlFor="QuestionUrl" className='text-lg'>Question URL Link</label>
        <input  id='QuestionUrl' type="url" placeholder="Paste the link" value={queUrl} onChange={(e) => setQueUrl(e.target.value)} className="bg-gray-800 mb-4 mt-2 w-full border border-white p-2 rounded  text-white" />

        {/* <textarea placeholder="Solution Description" value={solutionText} onChange={(e) => setDescription(e.target.value)} className="w-full border p-2 rounded bg-gray-800 text-white" rows={4}  /> */}
        <label htmlFor="Tags" className='text-lg'>Tags</label>
        <input type="text"  id='Tags' placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} className="bg-gray-800 mb-4 mt-2 w-full border border-white p-2 rounded  text-white"/>

       <VoiceRecorder 
        onUpload={(url) => {
          setVoiceUrl(url);
          setIsUploading(false);
        }} 
        onStartUpload={() => setIsUploading(true)} 
      />
       {isUploading && (
        <div className="text-sm text-green-400 text-center">
          ⏳ Uploading voice... please wait.
        </div>
      )}

        <button
          type="submit"
          className="mt-4 w-full bg-[#a243ce] hover:bg-[#742e95] py-2 rounded">Save Entry
        </button>
      </form>
    </div>
  );
};

export default VoiceEntryForm;
