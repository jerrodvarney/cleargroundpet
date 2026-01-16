export default function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <p>{review.text}</p>
      <div className="review-card-btm">
        <div className="review-img">
          {review.img}
        </div>
        <div className="reviewer-info">
          <h4>{review.name}</h4>
          <p>{review.date}</p>
        </div>
      </div>
    </div>
  );
}
