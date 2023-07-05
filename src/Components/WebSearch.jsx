import React, { useEffect, useState } from 'react';

function WebSearch() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'cc05150e66msh28c075f2d734b49p1bc81djsn9dac851861e4';
      const url = 'https://google-search83.p.rapidapi.com/google?query=word%20cup&gl=us&lr=en&num=10&start=0?&X-RapidAPI-Key=fd1c467d8dmsh55a0572f8411468p175498jsn801386789ba5';

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'google-search83.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error('API request failed');
        }

        let data;
        try {
          data = await response.json();
        } catch (error) {
          const text = await response.text();
        }

        setResults(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {results.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.url}>{item.url}</a>
        </div>
      ))}
    </div>
  );
}

export default WebSearch;
