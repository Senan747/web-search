import React, {useEffect, useState} from 'react'


function WebSearch() {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI';
      const params = {
        q: 'taylor',
        autoCorrect: 'true'
      };
      const queryString = new URLSearchParams(params).toString();
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'cc05150e66msh28c075f2d734b49p1bc81djsn9dac851861e4',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
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
        <div key={each.id}>
          <h3>{each.title}</h3>
          <p>{each.description}</p>
          <p>{each.body}</p>
        </div>
      ))}
    </div>
  )
}

export default WebSearch;