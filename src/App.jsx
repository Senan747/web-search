import React, { useState } from 'react';
import ImageSearch from './Components/ImageSearch.jsx';
import WebSearch from './Components/WebSearch.jsx';
import NewsSearch from './Components/NewsSearch.jsx';
import VideoSearch from './Components/VideoSearch.jsx';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [input, setInput] = useState("")

  const handleItemClick = (component) => {
    setActiveComponent(component);
  };
  const handleInput = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className='flex flex-col items-center'>
      <input type="text" onChange={handleInput} className='border-2 border-gega-black rounded-xl'/>
      <div>
        <ul className='flex flex-row justify-around items-center w-96 mt-10'>
          <li className='bg' onClick={() => handleItemClick('web')}>Home</li>
          <li className='bg' onClick={() => handleItemClick('image')}>Images</li>
          <li className='bg' onClick={() => handleItemClick('news')}>News</li>
          <li className='bg' onClick={() => handleItemClick('video')}>Video</li>
        </ul>
      </div>
      <div>
        {activeComponent === 'web' && <WebSearch searchQuery1={input} />}
        {activeComponent === 'image' && <ImageSearch searchQuery1={input}/>}
        {activeComponent === 'news' && <NewsSearch searchQuery1={input} />}
        {activeComponent === 'video' && <VideoSearch searchQuery1={input} />}
      </div>
    </div>
  );
}

export default App;
