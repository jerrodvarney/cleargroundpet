import './process-card.scss';

export default function ProcessCard({ cardInfo }) {
  return (
    <div className="process-card">
      <div className="process-card-step">
        {cardInfo.step}
      </div>
      <h4>{cardInfo.title}</h4>
      <div className="process-card-logo">
        {cardInfo.logo}
      </div>
      {/* <p>{cardInfo.tagline}</p> */}
    </div>
  );
}
