import React, { useState, useEffect } from "react";

const API_KEY = "pub_25576383d108bfd252758ab16fe54450fd226";
const SEARCH_QUERY = "hadise";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${encodeURIComponent(
            SEARCH_QUERY
          )}`
        );
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Results:</h1>
      <ul className="grid gap-6">
        {results.map((result, index) => (
          <li key={index} className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <img
                src={result.image_url}
                className="w-full h-auto"
                alt="No picture available"
              />
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-bold mb-2">{result.topic}</h2>
              <p className="text-gray-700 mb-4">
                {/* {result.description.split(" ").slice(0, 50).join(" ")}
                {result.description.split(" ").length > 50 && "... Read more"} */}
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
