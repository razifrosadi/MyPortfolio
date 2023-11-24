import React, { useEffect, useState } from 'react';
import PortfolioHeader from './PortfolioHeader';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Razif Ilham Rosadi',
        }
    }



render(){
    return(
        <PortfolioHeader />
    )
}
}

export default Portfolio;