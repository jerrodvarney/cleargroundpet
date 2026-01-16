import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <main className="thank-you">
      <h1>Quote request received.</h1>
      <p>We’ll reach out shortly with your exact pricing and scheduling options.</p>

      <Link to="/">Back to home</Link>
    </main>
  );
}
