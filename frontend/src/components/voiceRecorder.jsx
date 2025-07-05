import { useState, useRef } from 'react';

const VoiceRecorder = ({ onUpload, onStartUpload }) => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const intervalRef = useRef(null);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60).toString().padStart(2, '0');
    const seconds = (secs % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = event => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = async () => {
      clearInterval(intervalRef.current); 

      const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setSeconds(0);

      const formData = new FormData();
      formData.append('audio', blob, 'recording.webm');

      try {
         if (onStartUpload) onStartUpload();
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/upload-audio`, {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        setAudioUrl(data.url);
       if (data?.url && onUpload) {
        onUpload(data.url); 
      }

      } catch (err) {
        console.error('Upload error', err);
      }
    };

    mediaRecorderRef.current.start();
    setRecording(true);

    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      
      <div className="text-2xl font-mono mb-2 text-gray-700">
        {recording ? formatTime(seconds) : "00:00"}
      </div>

      <button
       type="button"
        onClick={recording ? stopRecording : startRecording}
        className={`px-4 py-2 rounded text-white ${recording ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {recording ? 'Stop' : 'Start'} Recording
      </button>

      {audioUrl && (
        <div className="mt-4 flex justify-center">
          <p className="text-sm mt-4 text-gray-600">Preview: &nbsp;</p>
          <audio src={audioUrl} controls />
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
