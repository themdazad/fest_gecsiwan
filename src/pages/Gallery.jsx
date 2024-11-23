import React from 'react';
import './Gallery.css'; 

const images = [
  { src: "/images/gallery/udghosh1.JPG", alt: "Event 1" },
  { src: "/images/gallery/udghosh2.JPG", alt: "Event 2" },
  { src: "/images/gallery/udghosh3.JPG", alt: "Event 3" },
  { src: "/images/gallery/udghosh4.JPG", alt: "Event 4" },
  { src: "/images/gallery/udghosh5.JPG", alt: "Event 5" },
  { src: "/images/gallery/udghosh6.JPG", alt: "Event 6" },
  { src: "/images/gallery/udghosh7.JPG", alt: "Event 7" },
  { src: "/images/gallery/udghosh8.JPG", alt: "Event 8" },
  
];

const Gallery = () => {
  return (
    <div className="gallery-container">
    <br /><br /><br />
      <h1>📸 Fest Memories - Gallery</h1>
      <p>Relive the best moments from our previous events.</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
