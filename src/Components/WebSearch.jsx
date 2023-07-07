import React, { useEffect, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi'


function Web() {
  const [news, setNews] = useState([]);
  const [activeComponent, setActiveComponent] = useState("top");
  const [selection, setSelection] = useState("");
  const countries = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AO', name: 'Angola' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia And Herzegovina' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'CD', name: 'DR Congo' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'PF', name: 'French Polynesia' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GR', name: 'Greece' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GN', name: 'Guinea' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LY', name: 'Libya' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MK', name: 'Macedonia' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MX', name: 'Mexico' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'KP', name: 'North Korea' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PA', name: 'Panama' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russia' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'KR', name: 'South Korea' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SY', name: 'Syria' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'US', name: 'United States Of America' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' }
  ];

  const handleSelection = (e) => {  
    setSelection(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetchPhotos();
  }, [activeComponent, selection]);

  const fetchPhotos = () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_258638b95b2160db613fa0bbf55e5160f5266&category=${activeComponent}&language=${selection}`;
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
    <select onChange={handleSelection} className='w-96 h-24'>
      {
        countries.map((country) => (
          <option value={country.code}>
            {country.name}
          </option>
        )
        )
      }
    </select>
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
              {result.description.length > 70 ? result.description.slice(0, 70) : result.description}
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