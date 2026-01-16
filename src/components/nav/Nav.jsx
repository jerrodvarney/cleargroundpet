import logo from '@/assets/clearground-logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="nav">
      <Link to="/" className="logo-wrapper">
        <img src={logo} alt="ClearGround Pet Services logo" />
      </Link>
      <div className="nav-links">
        <button type="button" onClick={() => scrollTo('services')}>Services</button>
        <button type="button" onClick={() => scrollTo('how')}>How it works</button>
        <button type="button" onClick={() => scrollTo('faq')}>FAQ</button>
        <button type="button" onClick={() => scrollTo('area')}>Service Area</button>
      </div>

      <Link to="/quote" className="nav-cta">Free Quote</Link>
    </nav>
  );
}
