import React, { useState, useEffect } from 'react';
import '../Css/Qualities.css';

const images = [
  'https://m.media-amazon.com/images/I/81iWJw+0pRL._AC_UF350,350_QL80_.jpg',
  'https://m.media-amazon.com/images/I/71bTXkppP3L.jpg',
  'https://m.media-amazon.com/images/I/71XtJk2uNzL.jpg'
];

const Qualities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <img src={image} alt={`Slide ${index + 1}`} />
            <img src={image} alt={`Slide ${index + 1}`} />
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevImage}>&#10094;</button>
      <button className="carousel-control next" onClick={nextImage}>&#10095;</button>
    </div>
  );
};

export default Qualities;


// export default Qualities;



