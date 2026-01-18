import logo from '@/assets/clearground-logo.png';
import { Link } from 'react-router-dom';
import QuoteForm from './components/quote-form/QuoteForm';

import './quote.scss';

export default function Quote({ zipCode = 89145 }) {
  return (
    <main id="quote" className="page">
      <Link to="/" className="logo-wrapper">
        <img src={logo} alt="ClearGround Pet Services logo" />
      </Link>
      <QuoteForm zipCode={zipCode} />
    </main>
  );
}
