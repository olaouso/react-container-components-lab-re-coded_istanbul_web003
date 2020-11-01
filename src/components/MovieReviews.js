// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  const renderReviews = () => {
    return props.reviews.map((movieReview, index) => (
      <div className="review" key={movieReview.display_title + index}>

      <h3>{movieReview.display_title}</h3>

      </div>
    ));
  };

  return <div className="review-list">{renderReviews()}</div>;
};

export default MovieReviews;