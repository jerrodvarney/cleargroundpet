import Footer from '@/components/nav/Footer';
import Nav from '@/components/nav/Nav';
import ProcessCard from '@/pages/home/components/process-card/ProcessCard';
import FaqSection from '@/pages/home/sections/faq/FaqSection';
import { FaCheck } from 'react-icons/fa';
import { PiPlaceholderBold } from 'react-icons/pi';

import { useNavigate } from 'react-router-dom';
import HomeCard from './components/home-card/HomeCard';
import './home.scss';

const PROCESS_CARDS = [
  {
    step: 1,
    title: 'Get a quick quote',
    logo: <PiPlaceholderBold />,
    // tagline: 'Reliable Scheduling',
  },
  {
    step: 2,
    title: 'We show up on schedule',
    logo: <PiPlaceholderBold />,
    // tagline: 'Reliable Scheduling',
  },
  {
    step: 3,
    title: 'We scoop and sanitize',
    logo: <PiPlaceholderBold />,
    // tagline: 'Reliable Scheduling',
  },
  {
    step: 4,
    title: 'You enjoy your clean yard',
    logo: <PiPlaceholderBold />,
    // tagline: 'Reliable Scheduling',
  },
];

const SERVICE_CARDS = [
  {
    logo: <PiPlaceholderBold />,
    title: 'Weekly / Bi-Weekly Service',
    tagline: 'Conveinent Recurring Service',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'One-Time Cleanups',
    tagline: 'Thorough Waste Removal',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Commercial Properties',
    tagline: 'HOAs, Apartments, Parks',
  },
];

const WHY_CARDS = [
  {
    logo: <PiPlaceholderBold />,
    title: 'placeholder title',
    tagline: 'tagline text',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'placeholder title',
    tagline: 'tagline text',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'placeholder title',
    tagline: 'tagline text',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'placeholder title',
    tagline: 'tagline text',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'placeholder title',
    tagline: 'tagline text',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'placeholder title',
    tagline: 'tagline text',
  },
];

const CHOICE_CHIPS = [
  {
    logo: <PiPlaceholderBold />,
    title: 'Weekly / Bi-Weekly Service',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'One-Time Cleanups',
  },
  {
    logo: <PiPlaceholderBold />,
    title: 'Commercial Properties',
  },
];

export default function Home() {
  const navigate = useNavigate();

  const goToQuote = () => {
    navigate('/quote', { replace: false });
  };

  return (
    <div id="home">

      <section id="hero">
        <Nav />
        <div className="section-container">
          <h3>Weekly, bi-weekly, and one-time cleanups. No Contracts.</h3>
          <h1>Professional Pet Waste Management and Sanitation in Las Vegas.</h1>
          <div id="cta-container">
            <p>Get your free quote to get started!</p>
            <button type="button">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      <section id="how">
        <h2>How It Works</h2>
        <div className="card-container">
          {PROCESS_CARDS.map((card) => <ProcessCard cardInfo={card} />)}
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
            <button type="button" onClick={goToQuote}>
              Get My Quote
            </button>
          </div>
        </div>
        {/* <div className="service-container commercial" /> --v2 implementation */}
        <div className="service-info-cards">
          <h4>top text</h4>
          <h3>Our Services</h3>
          {SERVICE_CARDS.map((card) => <HomeCard cardInfo={card} />)}
        </div>
      </section>

      <section id="promo">
        <div className="promo-container">
          <h4>promo tagline</h4>
          <h3>Promo Title</h3>
          <p>expiration</p>
          <button type="button" onClick={goToQuote}>Free Quote</button>
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
          {WHY_CARDS.map((card) => <HomeCard cardInfo={card} />)}
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
            <div className="half">
              vegas image goes here
              <PiPlaceholderBold />
            </div>
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
          {REVIEWS.map((review) => <ReviewCard review={review} />)}
        </div>
      </section>

      <FaqSection />

      <Footer />
    </div>
  );
}
