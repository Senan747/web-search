import React, { useEffect, useState } from 'react';

function Web() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_25576d7f5e3fad8ad12a5e4a846d450ef7aed&category=top&language=en`;
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
    <div class="container">
  <h1 class="text-3xl font-bold mb-4 text-center mt-4">Top News in the world</h1>
  <ul class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {news.map((result, index) => (
      <li key={index} class="bg-white rounded-lg shadow-md p-6">
        <img
          src={result.image_url}
          class="w-full min-h-[150px] mb-4"
          alt="No picture available"
        />
        <h2 class="text-xl font-bold mb-2">{result.topic}</h2>
        <p class="text-gray-700 mb-4">
          {result.description.slice(0, 70)}
        </p>
        <div class="flex flex-col">
          <p>
            <span class="font-bold">Date: </span>
            {result.pubDate}
          </p>
          <p>
            <span class="font-bold">Country: </span>
            {result.country}
          </p>
          <p>
            <span class="font-bold">Language: </span>
            {result.language}
          </p>
          <p>
            <span class="font-bold">Publisher: </span>
            {result.creator}
          </p>
          <p>
            <span class="font-bold">Category: </span>
            {result.category}
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>

  )
}

export default Web;