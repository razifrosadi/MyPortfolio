import React, { useEffect, useState } from 'react';
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
        </div>
    )
}
}

export default Portfolio;