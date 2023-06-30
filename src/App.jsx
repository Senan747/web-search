import React, { useState } from 'react';
import ImageSearch from './Components/ImageSearch.jsx';
import WebSearch from './Components/WebSearch.jsx';
import NewsSearch from './Components/NewsSearch.jsx';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='flex flex-col items-center'>
      <input type="text"  className='border-2 border-gega-black rounded-xl'/>
      <div>
        <ul className='flex flex-row justify-around items-center w-96 mt-10'>
          <li className='bg' onClick={() => handleItemClick('web')}>Home</li>
          <li className='bg' onClick={() => handleItemClick('image')}>Images</li>
          <li className='bg' onClick={() => handleItemClick('news')}>News</li>
        </ul>
      </div>
      <div>
        {activeComponent === 'web' && <WebSearch />}
        {activeComponent === 'image' && <ImageSearch />}
        {activeComponent === 'news' && <NewsSearch />}
      </div>
    </div>
  );
}

export default App;
