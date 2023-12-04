// CardComponent.js
import React from 'react';

const CardComponent = ({ title, content, images, link }) => (
  <div className='card'>
    <h2><a href={link || '#'}>{title}</a></h2>
    {images && <img className='img-card' src={images} alt={title} />} {/* Tambahkan handling untuk gambar */}
    <p>{content}</p>
  </div>
);

export default CardComponent;
