
import React from 'react';
import './Gallery.css';
import MiAmorcitoImage from '../images/MiAmorcito.png'; 
import MiAmorcitoImage2 from '../images/Miamorcito.jpg';
import MiAmorcitoImage3 from '../images/Miniñitabonita.jpg';
import MiAmorcitoImage4 from '../images/MiAmorcitoBonita.png';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Galería de Fotos</h1>
      <div className="gallery-images">
        <img src={MiAmorcitoImage} alt="Galería 1" className="gallery-image" />
        <img src={MiAmorcitoImage2} alt="Galería 2" className="gallery-image" />
        <img src={MiAmorcitoImage3} alt="Galería 3" className="gallery-image" />
        <img src={MiAmorcitoImage4} alt="Galería 4" className="gallery-image" />
      </div>
    </div>
  );
};

export default Gallery;
