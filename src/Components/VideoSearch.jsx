import React, { useEffect, useState } from 'react';
import {AiFillLike} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import {FaCloudUploadAlt} from 'react-icons/fa'
import {BiSolidDownload} from 'react-icons/bi'
import {GrView} from 'react-icons/gr'
import {BiTimeFive} from 'react-icons/bi'

function VideoComponent({ searchQuery1 }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [searchQuery1]);

  const fetchVideos = () => {
    const apiKey = '38023155-d92f1f49c2a19f8834825764e';
    const searchQuery = searchQuery1;
    const url = `https://pixabay.com/api/videos/?key=${apiKey}&q=${searchQuery}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.hits && data.hits.length > 0) {
          setVideos(data.hits);
        }
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  };

  if (videos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-wrap justify-around'>
      {videos.map(video => (
        <div key={video.id} className='border-2 rounded-md h-96 w-96'>
          <h1>{video.tags}</h1>
          <video controls>
            <source src={video.videos.tiny.url} className='h-[90%] w-full' type="video/mp4" />
          </video>
          <p className='flex flex-row items-center'><BiTimeFive className='' />{video.duration} seconds</p>
          <p className='flex flex-row items-center'><GrView className='' />{video.views}</p>
          <p className='flex flex-row items-center'><BiSolidDownload className='' />{video.downloads}</p>
          <p className='flex flex-row items-center'><AiFillLike className='' /> {video.likes}</p>
          <p className='flex flex-row items-center'><AiOutlineComment className='' />{video.comments}</p>
          <p className='flex flex-row items-center'><FaCloudUploadAlt className='' />{video.user}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoComponent;
