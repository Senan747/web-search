import React, { useEffect, useState } from 'react';

function VideoComponent() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    const apiKey = '38023155-d92f1f49c2a19f8834825764e';
    const searchQuery = 'taylor';
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
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h1>{video.tags}</h1>
          <video controls>
            <source src={video.videos.large.url} type="video/mp4" />
          </video>
          <p>Duration: {video.duration} seconds</p>
          <p>Views: {video.views}</p>
          <p>Downloads: {video.downloads}</p>
          <p>Likes: {video.likes}</p>
          <p>Comments: {video.comments}</p>
          <p>Uploader: {video.user}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoComponent;
