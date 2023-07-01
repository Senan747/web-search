import React, { useEffect, useState } from 'react';

const NewsSearch = () => {
  const [result, setResult] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_25576383d108bfd252758ab16fe54450fd226&q=pizza`
      );
      const data = await response.json();
      if (data.response && data.response.results) {
        setResult(data.response.results);
        console.log(data.response.results);
      } else {
        setResult([]); // Set an empty array if 'results' is undefined
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setResult([]); // Set an empty array in case of error
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      {result.map((each) => (
        <div >
          <h3>{each.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default NewsSearch;
