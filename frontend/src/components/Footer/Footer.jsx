import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src="facebook_icon.png" alt="facebook" />
        <img src="twitter_icon.png" alt="twitter" />
        <img src="instagram_icon.png" alt="instagram" />
        <img src="youtube_icon.png" alt="youtube" />
      </div>
      <ul>
        <li>Audio Desciptions</li>
        <li>Help Centers</li>
        <li>Gift Cards</li>
        <li>Media Centers</li>
        <li>Investers Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 1997-{new Date().getFullYear()} Akshansh, Inc.
      </p>
    </div>
  );
};

export default Footer;
