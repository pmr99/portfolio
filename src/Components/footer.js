import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="mailto:pradeep991004@gmail.com" aria-label="Email" className="footer-link">
          <FaEnvelope size={22} />
        </a>
        <a href="https://www.linkedin.com/in/pradeep-mani-rathnam/" aria-label="LinkedIn" className="footer-link">
          <FaLinkedinIn size={22} />
        </a>
        <a href="https://github.com/pmr99" aria-label="GitHub" className="footer-link">
          <FaGithub size={22} />
        </a>
      </div>
      <p className="footer-copy">Pradeep Mani Rathnam</p>
    </footer>
  );
};

export default Footer;
