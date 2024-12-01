
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <p className="footer-brand-name">FoodSite</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><>Home</></li>
            <li><>Menu</></li>
            <li><>About Us</></li>
            <li><>Contact</></li>
            <li><>Privacy Policy</></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            Instagram <br />
            Facebook <br />
            Twitter
          </div>
        </div>
      </div >
      <div className="footer-bottom">
        <p>&copy; 2024 FoodSite. All rights reserved.</p>
      </div>
    </footer >
  );
};

export default Footer;
