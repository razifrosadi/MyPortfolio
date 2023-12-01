import React from 'react';

const PortfolioFooter = () => {
  return (
    <footer id="footer">
      <div className="footer-left">
        <h2>Let's make something amazing together</h2>

        <div className="email-form">
          <h2>Start by <span>saying hi</span></h2>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Email Address" />
          <div>
            <input type="number" name="phone-number" placeholder="Phone number" />
            <button type="submit">Send</button>
          </div>
        </div>

        <div className="footer-title">
          <h3 className="title-first-name">Razif </h3>
          <h3 className="title-last-name">Rosadi</h3>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-email-intro">
          <p>Information</p>
          <h6>Sukabumi, West Java, 43156</h6>
          <h3>razifilham.12@gmail.com</h3>
        </div>
        <div className="footer-nav-menu">
          <ul className="footer-menu">
            <li><a className="active" href="#">&lt; Service &gt;</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Notes</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/razif-ilham-932465267/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/razifrosadi/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://razifilham.12@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href="https://instagram.com/razifrosadi/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default PortfolioFooter;
