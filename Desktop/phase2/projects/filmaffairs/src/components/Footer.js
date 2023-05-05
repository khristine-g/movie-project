import React from "react";
import "./Footer.css";
import Reviews from "./Reviews";
import LoginForm from "./LoginForm";
import RatingsBar from "./RatingsBar";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <p>&copy; 2023 Your Movie Project</p>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/sitemap">Sitemap</a>
        </div>
        <div className="footer__right">
          <p>Contact us:</p>
          <ul>
            <li>Prestige Plaza, Ngong Road</li>
            <li>Phone: 0721381825</li>
            <li>Email: info@FilmAffairs254@gmail.com</li>
          </ul>
          <LoginForm />
        </div>
      </div>
      <div className="footer__bottom">
        <Reviews />
        <RatingsBar />
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;