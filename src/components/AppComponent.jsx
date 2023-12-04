// AppComponent.js
import React from 'react';
import CardComponent from './CardComponent';
import CarouselComponent from './CarouselComponent';
import { certificated } from '../utils'; 

const AppComponent = () => (
  <section className='container'>
    <h2>My Certificated</h2>
    <div className='main-card'>
          <CarouselComponent>
      {certificated.map((certificate) => (
        <CardComponent
          key={certificate.id}
          title={certificate.title}
          images={certificate.images}
          link={certificate.link}
        />
      ))}
    </CarouselComponent>
    </div>
  </section>
);

export default AppComponent;
