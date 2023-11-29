import React, { useState } from 'react';

const DesignCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const designData = [
    {
      title: 'UI/UX Design',
      icon: 'fa-wand-magic-sparkles',
      description: 'Create design products with unique ideas that matter',
    },
    {
      title: 'Frontend Development',
      icon: 'fa-code',
      description: 'Making the Web Look Good',
    },
    {
      title: 'Backend Development',
      icon: 'fa-terminal',
      description: 'Building the Web’s Backbone',
    },
  ];

  const introductionTexts = [
    {
      title: "Hello! I'm Tanmoy Saha",
      subtitle: 'Crafting User Experiences that Delight and Inspire',
      content:
        "I am a UI/UX designer who loves to create engaging and delightful user experiences for web and mobile applications. I use my skills in user research, design thinking, and prototyping to craft interfaces that are not only aesthetically pleasing but also easy to use and navigate. Making it a very smooth and delightful experience for the clients",
    },
    {
      title: "Hello! I'm Tanmoy Saha",
      subtitle: "The Web’s & Mobile’s Magician",
      content:
        'As a frontend developer, I create stunning and responsive web pages that capture the attention and imagination of the users. I use my skills in HTML, CSS, JavaScript, and various frameworks and libraries to design and implement user interfaces that are both visually appealing and user-friendly.',
    },
    {
      title: "Hello! I'm Tanmoy Saha",
      subtitle: 'Coding with Efficiency',
      content:
        'As a backend developer, I create robust and scalable web applications that handle the logic and data behind the scenes. I use my skills in Python, Django, SQL, and various APIs and tools to develop and deploy backend systems that are secure, reliable, and efficient.',
    },
  ];

  return (
    <section className='container' id="introduction">
      <div className='main-cards'>
      <div className="cards">
      <h2>About Us</h2>
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
            <a href="#">20 PROJECTS</a>
          </div>
        ))}
      </div>

      {introductionTexts.map((introduction, introductionIndex) => (
        <div
          key={introductionIndex}
          className="introduction-text"
          style={{ display: introductionIndex === activeIndex ? 'block' : 'none' }}
        >
          <p>{introduction.title}</p>
          <h2>{introduction.subtitle}</h2>
          <h4>{introduction.subtitle}</h4>
          <p>{introduction.content}</p>
        </div>
      ))}
            </div>
    </section>
  );
};

export default DesignCards;
