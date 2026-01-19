import Nav from '@/components/nav/Nav';
import ProcessCard from '@/pages/home/components/process-card/ProcessCard';
import FaqSection from '@/pages/home/sections/faq/FaqSection';
import { FaCheck } from 'react-icons/fa';
import { PiPlaceholderBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import HomeCard from './components/home-card/HomeCard';
import ReviewCard from './components/review-card/ReviewCard';
import './home.scss';

const PROCESS_CARDS = [
  {
    step: 1,
    title: 'Get your free quote',
    logo: <PiPlaceholderBold />,
    tagline: '30 seconds • no obligation',
    body: 'Tell us your yard size, dogs, and preferred frequency. We’ll send a simple price and schedule options.',
  },
  {
    step: 2,
    title: 'Pick a day & time window',
    logo: <PiPlaceholderBold />,
    tagline: 'Easy recurring scheduling',
    body: 'Choose weekly or bi-weekly service (or a one-time cleanup). We confirm your service day and arrival window.',
  },
  {
    step: 3,
    title: 'We scoop, bag, and sanitize',
    logo: <PiPlaceholderBold />,
    tagline: 'Safe, thorough cleanup',
    body: 'We remove all pet waste, double-bag, and sanitize high-traffic areas to help reduce odor and bacteria.',
  },
  {
    step: 4,
    title: 'Enjoy a clean, usable yard',
    logo: <PiPlaceholderBold />,
    tagline: 'More time with your dogs',
    body: 'No more landmines. Just a cleaner yard for playtime, guests, and peace of mind.',
  },
];

const RESIDENTIAL_BULLETS = [
  'Waste removal for 1–4+ dogs',
  'Double-bagging and proper disposal',
  'Optional deodorizing & sanitizing treatment',
];

const SERVICE_CARDS = [
  {
    logo: <PiPlaceholderBold />,
    title: 'Weekly / Bi-Weekly Service',
    tagline: 'Convenient recurring cleanup',
    body: 'Keep your yard consistently clean with reliable service on a schedule that fits your routine.',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'One-Time Cleanups',
    tagline: 'Reset your yard fast',
    body: 'Moving in/out, behind on cleanup, hosting guests, or post-storm? We’ll restore your yard in one visit.',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Commercial Properties',
    tagline: 'HOAs, apartments, parks',
    body: 'Common areas, dog runs, and community spaces—consistent service and professional reporting (v2 focus).',
  },
];

const CHOICE_CHIPS = [
  {
    logo: <PiPlaceholderBold />,
    title: 'Weekly / Bi-Weekly Service',
    hint: 'Best for maintenance',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'One-Time Cleanups',
    hint: 'Best for a reset',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Commercial Properties',
    hint: 'HOAs & apartments',
  },
];

const PROMO = {
  eyebrow: 'New customer special',
  title: 'First cleanup discount',
  details: 'Limited-time offer • Applies to one-time cleanups or first visit of recurring service',
  cta: 'Get Free Quote',
};

const WHY_CARDS = [
  {
    logo: <PiPlaceholderBold />,
    title: 'No Contracts',
    tagline: 'Stay because you love it, not because you have to.',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Always On Schedule',
    tagline: 'Consistent service windows with clear communication.',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Sanitized Finish',
    tagline: 'Deodorizing + sanitizing to help reduce bacteria and odor.',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Gates Closed',
    tagline: 'We treat your home with care—secure gates every visit.',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Text Updates',
    tagline: 'On-the-way and completion notifications (optional).',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Local Las Vegas',
    tagline: 'Built for desert yards—rock, turf, and everything in between.',
  },
];

const SERVICE_AREA_LIST = [
  'Summerlin',
  'Spring Valley',
  'Enterprise',
  'Henderson',
  'Green Valley',
  'Centennial Hills',
  'Mountains Edge',
  'North Las Vegas',
];

const REVIEWS = [
  {
    name: 'Local Customer',
    rating: 5,
    text: 'Super easy to set up and my yard is finally usable again. They show up when they say they will.',
  },
  {
    name: 'Dog Owner',
    rating: 5,
    text: 'Fast, professional, and the sanitizing made a noticeable difference with odor.',
  },
  {
    name: 'Busy Parent',
    rating: 5,
    text: 'Worth it. No contracts, clear communication, and the gate is always left secure.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  const goToQuote = () => {
    navigate('/quote', { replace: false });
  };

  return (
    <main id="home" className="page">

      <section id="hero">
        <Nav />
        <div className="hero-content">
          <h3>Weekly, bi-weekly, and one-time cleanups. No Contracts.</h3>
          <h1>Professional Pet Waste Management and Sanitation in Las Vegas.</h1>
          <div className="cta-container">
            <p>Get your free quote to get started!</p>
            <button type="button" className="cta-btn" onClick={goToQuote}>
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      <section id="how">
        <h2>How It Works</h2>
        <div className="card-container">
          {PROCESS_CARDS.map((card) => <ProcessCard key={card.step} cardInfo={card} />)}
        </div>
      </section>

      <section id="services">
        <div className="service-container">
          <div className="service-info">
            <h4>residential</h4>
            <h3>Residential</h3>
            <ul>
              <li>
                <FaCheck />
                <p>list item</p>
              </li>
              <li>
                <FaCheck />
                <p>list item</p>
              </li>
              <li>
                <FaCheck />
                <p>list item</p>
              </li>
            </ul>
            <button type="button" className="cta-btn" onClick={goToQuote}>
              Get My Quote
            </button>
          </div>
        </div>
        {/* <div className="service-container commercial" /> --v2 implementation */}
        <div className="service-info-cards">
          <h4>top text</h4>
          <h3>Our Services</h3>
          {SERVICE_CARDS.map((card) => <HomeCard key={card.title} cardInfo={card} />)}
        </div>
      </section>

      <section id="promo">
        <div className="promo-container">
          <h4>promo tagline</h4>
          <h3>Promo Title</h3>
          <p>expiration</p>
          <button type="button" className="cta-btn" onClick={goToQuote}>
            Free Quote
          </button>
        </div>
      </section>

      <section id="why">
        <h4>top text</h4>
        <h3>Why Choose Us?</h3>
        <p>
          {`Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum
          dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum L
          orem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum`}
        </p>
        <div className="why-cards-container">
          {WHY_CARDS.map((card) => <HomeCard key={card.title} cardInfo={card} />)}
        </div>
      </section>

      <section id="area">
        <h4>top text</h4>
        <h3>Service Area</h3>
        <p>
          {`Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum
          dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum L
          orem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum`}
        </p>
        <div className="area-halfs">
          <div className="half">
            <div className="area-list">
              <ul>
                <li>
                  <PiPlaceholderBold />
                  <p>Neighborhood</p>
                </li>
                <li>
                  <PiPlaceholderBold />
                  <p>Neighborhood</p>
                </li>
                <li>
                  <PiPlaceholderBold />
                  <p>Neighborhood</p>
                </li>
                <li>
                  <PiPlaceholderBold />
                  <p>Neighborhood</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="half">
            vegas image goes here
            <PiPlaceholderBold />
          </div>
        </div>
      </section>

      <section id="reviews">
        <h4>top text</h4>
        <h3>Reviews</h3>
        <p>
          {`Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum
          dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum L
          orem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum`}
        </p>
        <div className="review-cards">
          {REVIEWS.map((review) => <ReviewCard key={review.name} review={review} />)}
        </div>
      </section>

      <section id="referral">
        <div className="referral-half">
          <h4>top text</h4>
          <h3>Referral</h3>
          <p>
            {`Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum
            Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum`}
          </p>
          <button type="button" className="cta-btn">CTA</button>
        </div>
        <div className="referral-half">
          <h4>top text</h4>
          <h3>Get Quote</h3>
          <button type="button" className="cta-btn" onClick={goToQuote}>
            Free Quote
          </button>
        </div>
      </section>

      <FaqSection />
    </main>
  );
}
