import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function Web() {
  const [news, setNews] = useState([]);
  const [activeComponent, setActiveComponent] = useState("top");
  const [selectionLanguage, setSelectionLanguage] = useState("");
  const [selectionCountry, setSelectionCountry] = useState("");

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


  const handleSelectionLanguage = (e) => {  
    setSelectionLanguage(e.target.value.toLowerCase());
  };

  const handleSelectionCountry = (e) => {  
    setSelectionCountry(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetchNews();
  }, [activeComponent, selectionLanguage, selectionCountry]);

  const fetchNews = () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_258638b95b2160db613fa0bbf55e5160f5266&category=${activeComponent}`;
    if (selectionLanguage) {
      url += `&language=${selectionLanguage}`;
    }
    if (selectionCountry) {
      url += `&country=${selectionCountry}`;
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
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4 text-center mt-4">{activeComponent.toLocaleUpperCase()} news in the world</h1>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <select className="border-2" onChange={handleSelectionCountry}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <select onChange={handleSelectionLanguage} name="Select the language" className="border-2">
          <option value="">Select a language</option>
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
      <ul className="flex flex-row flex-wrap m-8">
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-green-500 rounded-lg ${activeComponent === 'top' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("top")}>Top</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'top' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("top")}>Top</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'business' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("business")}>Business</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'entertainment' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("entertainment")}>Entertainment</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'environment' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("environment")}>Environment</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'food' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("food")}>Food</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'health' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("health")}>Health</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'politics' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("politics")}>Politics</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'science' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("science")}>Science</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'sports' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("sports")}>Sports</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'technology' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("technology")}>Technology</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'tourism' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("tourism")}>Tourism</li>
        <li className = {`pl-4 pr-4 pt-2 pb-2 ml-3 cursor-pointer bg-gega-light rounded-lg ${activeComponent === 'world' ? 'bg-green-500' : 'bg-gray-200'}`} onClick={() => setActiveComponent("world")}>World</li>
      </ul>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((result, index) => (
          result.image_url !== null ? (
            <a href={result.link} key={index}>
              <li className="bg-white rounded-lg shadow-md p-6">
                <img
                  src={result.image_url}
                  className="w-full min-h-[150px] mb-4"
                  alt="No picture available"
                />
                <h2 className="text-xl font-bold mb-2">{result.topic}</h2>
                <p className="text-gray-700 mb-4">
                  {result.description && result.description.length > 70 ? result.description.slice(0, 70) : result.description}...
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
  );
}

export default Web;
