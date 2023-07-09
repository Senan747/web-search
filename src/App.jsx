import React, { useState } from 'react';
import ImageSearch from './Components/ImageSearch.jsx';
import WebSearch from './Components/WebSearch.jsx';
import NewsSearch from './Components/NewsSearch.jsx';
import VideoSearch from './Components/VideoSearch.jsx';
import {BiSearchAlt} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {BiNews} from 'react-icons/bi'
import {BsFillImageFill} from 'react-icons/bs'
import {AiFillVideoCamera} from 'react-icons/ai'

function App() {
  const [activeComponent, setActiveComponent] = useState("web");
  const [input, setInput] = useState("")

  const handleItemClick = (component) => {
    setActiveComponent(component);
  };
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='flex flex-col items-center bg-gega-soft min-h-screen'>
      <div className='flex items-center w-52 relative'>
        <input type="text" onChange={handleInput} className='border-2 border-gega-black rounded-xl mt-5 pl-10 pt-1 pb-1'/> 
        <BiSearchAlt className='absolute top-8 left-3 '/>
      </div>
        
      <div>
        <ul className='flex flex-row justify-around items-center w-96 mt-10 mb-10'>
          
          <li className={`bg flex flex-row items-center cursor-pointer pt-2 pb-2 pl-3 pr-3 rounded-[10px] ${activeComponent === "web" ? 'bg-gega-light' : 'bg-gega-white'}`} onClick={() => handleItemClick('web')}><AiFillHome />Home</li>
          <li className={`bg flex flex-row items-center cursor-pointer pt-2 pb-2 pl-3 pr-3 rounded-[10px] ${activeComponent === "image" ? 'bg-gega-light' : 'bg-gega-white'}`} onClick={() => handleItemClick('image')}><BsFillImageFill />Images</li>
          <li className={`bg flex flex-row items-center cursor-pointer pt-2 pb-2 pl-3 pr-3 rounded-[10px] ${activeComponent === "news" ? 'bg-gega-light' : 'bg-gega-white'}`} onClick={() => handleItemClick('news')}><BiNews />News</li>
          <li className={`bg flex flex-row items-center cursor-pointer pt-2 pb-2 pl-3 pr-3 rounded-[10px] ${activeComponent === "video" ? 'bg-gega-light' : 'bg-gega-white'}`} onClick={() => handleItemClick('video')}><AiFillVideoCamera />Video</li>
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
