import React, { useEffect, useState } from 'react';
import DesignCards from './DesignCards';
import PortfolioHeader from './PortfolioHeader';
import PortfolioHero from './PortfolioHero';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Razif Ilham Rosadi',
        }
    }



render(){
    return(
        <div>
            <PortfolioHeader />
            <PortfolioHero />
            <DesignCards />
        </div>
    )
}
}

export default Portfolio;