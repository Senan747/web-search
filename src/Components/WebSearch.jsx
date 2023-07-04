import React, {useEffect, useState} from 'react'


function WebSearch() {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://bing-web-search1.p.rapidapi.com/search';
      const params = {
        q: 'ronaldo',
        mkt: 'en-us',
        safeSearch: 'Off',
        textFormat: 'Raw',
        freshness: 'Day'
      };
      const queryString = new URLSearchParams(params).toString();
      const options = {
        method: 'GET',
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAP&I-Key': 'cc05150e66msh28c075f2d734b49p1bc81djsn9dac851861e4',
          'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(`${url}?${queryString}`, options);
        const resultJson = await response.json();
        setResult(resultJson.value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {result.map((each) => (
        <div className='mb-8'>
          <a href={each.url}>
            <h3 className='text-3xl font-bold'>{each.name}</h3>
            <p>{each.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
  
}
 
export default WebSearch;