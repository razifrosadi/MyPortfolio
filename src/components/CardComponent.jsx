// CardComponent.js
import React from 'react';

const CardComponent = ({ title, content, images }) => (
  <div className='card'>
    <h2>{title}</h2>
    {images && <img src={images} alt={title} />} {/* Tambahkan handling untuk gambar */}
    <p>{content}</p>
  </div>
);

export default CardComponent;
