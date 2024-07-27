import React from 'react';

const StarRating = ({ rating }) => {
  // Ensure the rating is between 0 and 5
  const normalizedRating = Math.min(5, Math.max(0, rating));
  
  // Calculate the width of the filled stars
  const filledWidth = `${(normalizedRating / 5) * 100}%`;

  return (
    <div className="star-rating">
      <div className="star-rating-outer">
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <div className="star-rating-inner" style={{ width: filledWidth }}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <span className="star-rating-number">{normalizedRating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;