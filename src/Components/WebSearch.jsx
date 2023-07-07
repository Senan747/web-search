import React, { useEffect, useState } from 'react';

function Web() {
  const [news, setNews] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, [activeComponent]);

  const fetchPhotos = () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_258638b95b2160db613fa0bbf55e5160f5266&category=${activeComponent}&language=en`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setNews(data.results);
        }
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };

 
  return (
    <div className="container">
    <h1 className="text-3xl font-bold mb-4 text-center mt-4">Top News in the world</h1>
    <ul className='flex flex-row m-8'>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("top")}>Top</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("business")}>Business</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("entertainment")}>Entertainment</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("environment")}>Environment</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("food")}>Food</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("health")}>Health</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("politics")}>Politics</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("science")}>Science</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("sports")}>Sports</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("technology")}>Technology</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("top")}>Top</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("tourism")}>Tourism</li>
      <li className='pl-4 pr-4 pt-2 pb-2 bg-gega-light' onClick={() => setActiveComponent("world")}>World</li>
    </ul>
    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {news.map((result, index) => (
        result.image_url !== null ? (
          <a href={result.link}>
          <li key={index} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={result.image_url}
              className="w-full min-h-[150px] mb-4"
              alt="No picture available"
            />
            <h2 className="text-xl font-bold mb-2">{result.topic}</h2>
            <p className="text-gray-700 mb-4">
              {result.description}
            </p>
            <div className="flex flex-col">
              <p>
                <span className="font-bold">Date: </span>
                {result.pubDate}
              </p>
              <p>
                <span className="font-bold">Country: </span>
                {result.country}
              </p>
              <p>
                <span className="font-bold">Language: </span>
                {result.language}
              </p>
              <p>
                <span className="font-bold">Publisher: </span>
                {result.creator}
              </p>
              <p>
                <span className="font-bold">Category: </span>
                {result.category}
              </p>
            </div>
          </li>
          </a>
        ) : null
      ))}
    </ul>
  </div>

  ) 
}

export default Web;