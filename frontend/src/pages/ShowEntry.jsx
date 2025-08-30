import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ShowEntry = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/algovoice/showentry`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          console.error("Error fetching entries:", res.status);
          return;
        }

        const data = await res.json();
        setEntries(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="text-white py-6 max-w-7xl">
    <h1 className='text-3xl pb-6 text-center'>My Records</h1>
      <div className='flex flex-wrap justify-center'>
        {entries.map((entry) => (
          <div className='p-6 cursor-pointer border b-gray-1 rounded-lg m-2' 
          onClick={() => navigate(`/entry/${entry._id}`)}  key={entry._id} >
            <a  className='font-bold text-gray-300'>{entry.question}</a>
            <p className="text-sm text-gray-500">Click to view details</p>
            {/* <audio id='player' controls className="my-4 text-blue-500 rounded-lg"> */}
            {/* <source src={entry.voiceUrl} type="audio/webm"></source> */}
            {/* </audio> */}
            {/* <button className='mb-2 w-full bg-blue-500/50 hover:bg-blue-500/80 text-white py-2 rounded-lg  transition-colors duration-200'><a href={entry.queUrl}>Question Link</a></button> */}
            {/* <div className='flex'> */}
              {/* {entry.tags.map((tag)=>( */}
              {/* <div className='text-blue-500'># */}
                {/* <a className=' hover:underline' href=''>{tag}</a>&nbsp;&nbsp; */}
              {/* </div> */}
            {/* ))} */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowEntry;