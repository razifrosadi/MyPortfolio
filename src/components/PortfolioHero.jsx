import React from 'react';

function PortfolioHero() {
    return (
        <section className='container'>
            <div className='main'>
                <div className='detail'>
                    <h3>Hi, It's Me</h3>
                    <h1>I'm <span style={{ color: '#f9532d' }}>Razif</span></h1>
                    <p>
                        My name is Razif Ilham Rosadi, a fresh
                        graduate in the field of Informatic
                        Engineering. My interests and dedication
                        are primarily focused on Front-End Web
                        Developer.
                    </p>
                    <div className="social">
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                        <a href="#"><i className='bx bxl-instagram'></i></a>
                        <a href="#"><i className='bx bxl-github'></i></a>
                        <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                    </div>
                </div>
                <div className="img-sec">
                    <div className="images">
                        <img src="./images/f-1.png" alt="My Portfolio" className="img-w" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioHero;
