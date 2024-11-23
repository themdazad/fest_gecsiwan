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
  { src: "/images/gallery/udghosh9.JPG", alt: "Event 9" },
  { src: "/images/gallery/udghosh10.JPG", alt: "Event 10" },
  { src: "/images/gallery/udghosh11.JPG", alt: "Event 11" },
  { src: "/images/gallery/udghosh13.JPG", alt: "Event 13" },
  { src: "/images/gallery/udghosh14.JPG", alt: "Event 14" },
  { src: "/images/gallery/udghosh15.JPG", alt: "Event 15" },
  { src: "/images/gallery/udghosh17.JPG", alt: "Event 17" },
  
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
