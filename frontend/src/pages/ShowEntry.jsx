import { useEffect, useState } from 'react';

const ShowEntry = () => {
  const [entries, setEntries] = useState([]);

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
    <div className="text-white">
      <h1>My Entries</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <h2>{entry.question}</h2>
            <a href={entry.queUrl}>Question Url</a>
            <audio controls>
            <source src={entry.voiceUrl} type="audio/webm"></source>
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShowEntry;