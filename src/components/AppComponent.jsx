// AppComponent.js
import React from 'react';
import CardComponent from './CardComponent';
import CarouselComponent from './CarouselComponent';
import { certificated } from '../utils'; // Ganti dari `certificated` ke `certificates`

const AppComponent = () => (
  <section className='container'>
    <CarouselComponent>
      {certificated.map((certificate) => (
        <CardComponent
          key={certificate.id}
          title={certificate.title}
          images={certificate.images}
        />
      ))}
    </CarouselComponent>
  </section>
);

export default AppComponent;
