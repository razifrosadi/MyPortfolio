import React, { useState } from 'react';
import { designData, introductionTexts } from '../utils';

const DesignCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };



  return (
    <section className='container' id="introduction">
      <div className='main-cards'>
      <div className="cards">
      <h2>My Skill</h2>
        {designData.map((design, index) => (
          <div
            key={index}
            className={`design-card ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            <div>
              <h3>{design.title}</h3>
              <i className={`fa-solid ${design.icon}`}></i>
            </div>
            <p>{design.description}</p>
          </div>
        ))}
      </div>

      {introductionTexts.map((introduction, introductionIndex) => (
        <div
          key={introductionIndex}
          className="introduction-text"
          style={{ display: introductionIndex === activeIndex ? 'block' : 'none' }}
        >
          <h2>{introduction.title}</h2>
          <h2>{introduction.subtitle}</h2>
          <p>{introduction.content}</p>
        </div>
      ))}
            </div>
    </section>
  );
};

export default DesignCards;
