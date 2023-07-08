import React, { useEffect, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi'


function Web() {
  const [news, setNews] = useState([]);
  const [activeComponent, setActiveComponent] = useState("top");
  const [selection, setSelection] = useState("");
  const languages = [
    { name: "Afrikaans", code: "af" },
    { name: "Albanian", code: "sq" },
    { name: "Amharic", code: "am" },
    { name: "Arabic", code: "ar" },
    { name: "Assamese", code: "as" },
    { name: "Azerbaijani", code: "az" },
    { name: "Belarusian", code: "be" },
    { name: "Bengali", code: "bn" },
    { name: "Bosnian", code: "bs" },
    { name: "Bulgarian", code: "bg" },
    { name: "Burmese", code: "my" },
    { name: "Catalan", code: "ca" },
    { name: "Central Kurdish", code: "ckb" },
    { name: "Chinese", code: "zh" },
    { name: "Croatian", code: "hr" },
    { name: "Czech", code: "cs" },
    { name: "Danish", code: "da" },
    { name: "Dutch", code: "nl" },
    { name: "English", code: "en" },
    { name: "Estonian", code: "et" },
    { name: "Filipino", code: "pi" },
    { name: "Finnish", code: "fi" },
    { name: "French", code: "fr" },
    { name: "Georgian", code: "ka" },
    { name: "German", code: "de" },
    { name: "Greek", code: "el" },
    { name: "Gujarati", code: "gu" },
    { name: "Hebrew", code: "he" },
    { name: "Hindi", code: "hi" },
    { name: "Hungarian", code: "hu" },
    { name: "Icelandic", code: "is" },
    { name: "Indonesian", code: "id" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "jp" },
    { name: "Khmer", code: "kh" },
    { name: "Kinyarwanda", code: "rw" },
    { name: "Korean", code: "ko" },
    { name: "Latvian", code: "lv" },
    { name: "Lithuanian", code: "lt" },
    { name: "Luxembourgish", code: "lb" },
    { name: "Macedonian", code: "mk" },
    { name: "Malay", code: "ms" },
    { name: "Malayalam", code: "ml" },
    { name: "Maltese", code: "mt" },
    { name: "Maori", code: "mi" },
    { name: "Marathi", code: "mr" },
    { name: "Mongolian", code: "mn" },
    { name: "Nepali", code: "ne" },
    { name: "Norwegian", code: "no" },
    { name: "Oriya", code: "or" },
    { name: "Pashto", code: "ps" },
    { name: "Persian", code: "fa" },
    { name: "Polish", code: "pl" },
    { name: "Portuguese", code: "pt" },
    { name: "Punjabi", code: "pa" },
    { name: "Romanian", code: "ro" },
    { name: "Russian", code: "ru" },
    { name: "Samoan", code: "sm" },
    { name: "Serbian", code: "sr" },
    { name: "Shona", code: "sn" },
    { name: "Sinhala", code: "si" },
    { name: "Slovak", code: "sk" },
    { name: "Slovenian", code: "sl" },
    { name: "Somali", code: "so" },
    { name: "Spanish", code: "es" },
    { name: "Swahili", code: "sw" },
    { name: "Swedish", code: "sv" },
    { name: "Tajik", code: "tg" },
    { name: "Tamil", code: "ta" },
    { name: "Telugu", code: "te" },
    { name: "Thai", code: "th" },
    { name: "Turkish", code: "tr" },
    { name: "Turkmen", code: "tk" },
    { name: "Ukrainian", code: "uk" },
    { name: "Urdu", code: "ur" },
    { name: "Uzbek", code: "uz" },
    { name: "Vietnamese", code: "vi" }
];



  const handleSelection = (e) => {  
    setSelection(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetchNews();
  }, [activeComponent, selection]);

  const fetchNews = () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_258638b95b2160db613fa0bbf55e5160f5266&category=${activeComponent}`;
    if(selection) {
      url += `&language=${selection}`
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setNews(data.results);
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  };

  return (
    <div className="container">
    <h1 className="text-3xl font-bold mb-4 text-center mt-4">Top News in the world</h1>
    {/* <select className="border-2" onChange={handleSelectionCountry}>
      {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select> */}
    <select onChange={handleSelection} name="Select the language" className='w-96 h-24'>
      {
        languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        )
        )
      }
    </select>
    {selection}
    <ul className='flex flex-row m-8'>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'top' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("top")}>Top</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'business' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("business")}>Business</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'entertainment' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("entertainment")}>Entertainment</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'environment' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("environment")}>Environment</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'food' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("food")}>Food</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'health' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("health")}>Health</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'politics' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("politics")}>Politics</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'science' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("science")}>Science</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'sports' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("sports")}>Sports</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'technology' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("technology")}>Technology</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'tourism' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("tourism")}>Tourism</li>
      <li className = {`pl-4 pr-4 pt-2 pb-2 cursor-pointer bg-gega-light ${activeComponent === 'world' ? 'bg-green-500' : 'bg-gega-light'}`} onClick={() => setActiveComponent("world")}>World</li>
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
              {result.description && result.description.length > 70 ? result.description.slice(0, 70) : result.description}
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