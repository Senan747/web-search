import React, { useEffect, useState } from 'react';

function ImageSearch({ searchQuery1 }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, [searchQuery1]);

  const fetchPhotos = () => {
    const apiKey = '38023155-d92f1f49c2a19f8834825764e';
    const searchQuery = searchQuery1;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.hits && data.hits.length > 0) {
          setPhotos(data.hits);
        }
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };

  if (photos.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(searchQuery1)
  return (
    <div>
      <ul className='flex flex-wrap'>
        {photos.map(photo => (
          <li key={photo.id} className="ml-16">
            <img src={photo.previewURL} alt={photo.tags} />
            <p>Photographer: {photo.user}</p>
            <p>Dimensions: {photo.imageWidth}x{photo.imageHeight}</p>
            <p>Downloads: {photo.downloads}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageSearch;