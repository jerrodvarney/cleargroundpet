import './home-card.scss';

export default function HomeCard({ cardInfo }) {
  return (
    <div className="service-card">
      <div className="service-card-logo">
        {cardInfo.logo}
      </div>
      <h4>{cardInfo.title}</h4>
      <p>{cardInfo.tagline}</p>
    </div>
  );
}
