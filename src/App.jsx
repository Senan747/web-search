import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [result, setResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const query = encodeURIComponent(searchQuery);
      const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${query}&pageNumber=1&pageSize=10&autoCorrect=true`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c3eb9459b6msh1be82007372ccf6p10f85ajsned17d1aabe3c',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      }

      try {
        const response = await fetch(url, options);
        const resultJson = await response.json();
        setResult(resultJson.value);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchQuery !== '') {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search images" />
      <ul>
        {result.map((each) => (
          <li className="border-2" key={each.imageWebSearchUrl}>
            <h3 className="text-xl font-bold">{each.title}</h3>
            <img src={each.url} alt={each.title} />
            <a href={each.webpageUrl} target="_blank" rel="noopener noreferrer">
              View Image Source
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
