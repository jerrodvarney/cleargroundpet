import Nav from '@/components/nav/Nav';

export default function Quote() {
  return (
    <main className="quote-page">
      <Nav />
      <section className="quote-hero">
        <h1>Get your free quote in under 60 seconds.</h1>
        <p>Residential dog poop scooping in Las Vegas. No contracts.</p>

        <ul className="trust-bullets">
          <li>Reliable scheduling</li>
          <li>Pet-safe products</li>
          <li>Gate-secure visits</li>
        </ul>
      </section>

      {/* <QuoteForm /> */}
    </main>
  );
}
