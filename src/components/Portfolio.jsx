import React from 'react';
import DesignCards from './DesignCards';
import LatestWork from './LatestWork';  // Perbaiki nama komponen LatesWork menjadi LatestWork
import PortfolioHeader from './PortfolioHeader';
import PortfolioHero from './PortfolioHero';
import PortfolioFooter from './PortfolioFooter';
import AppComponent from './AppComponent';

function Portfolio() {


  return (
    <div>
      <PortfolioHeader />
      <PortfolioHero />
      <DesignCards />
      <LatestWork />
      <AppComponent />
      <PortfolioFooter />
    </div>
  );
}

export default Portfolio;
