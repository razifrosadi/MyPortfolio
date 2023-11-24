import React from 'react';
import DarkModeToggle from './DarkModeToggle';

function PortfolioHeader({ isDarkMode, handleDarkModeToggle }){
    return(
        <header className='container'>
            <div className='page-header'>
                <div className='logo'>
                    <a href='#'>My Portfolio</a>
                </div>

                <input type="checkbox" id="click" />

                <label htmlFor="click" className="mainicon">
                    <div className="menu">
                        <i className='bx bx-menu'></i>
                    </div>
                </label>

            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <DarkModeToggle isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
            </div>
        </header>
    )
}

export default PortfolioHeader;