import { Link } from "react-router-dom";
import reviews from "../data/reviews.js";
import { useEffect } from "react";

function HomeMainSection() {

  let fetchedReviews = getReviews();

  useEffect((fetchedReviews) => {
    fetchedReviews = getReviews();
  })

  return (
    <div>
      <div>
        <h2>About Us</h2>
        <p>
          Welcome to our online store! We are passionate about providing high
          quality products and exceptional customer service. Learn more about
          our story and commitment to your satisfaction.
        </p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>
      <div>
        <h2>Customer Reviews</h2>
        {fetchedReviews}
      </div>
    </div>
  );
}

function getReviews() {
  let reviewOne = Math.floor(Math.random() * reviews.length);
  let reviewTwo = reviewOne;
  while (reviewTwo === reviewOne) {
    reviewTwo = Math.floor(Math.random() * reviews.length);
  }
  return (
    <div>
      <p>{reviews[reviewOne].customerName}</p>
      <p>{reviews[reviewOne].reviewContent}</p>
      <p>{"★".repeat(reviews[reviewOne].stars)} </p>
      <p>{reviews[reviewTwo].customerName}</p>
      <p>{reviews[reviewTwo].reviewContent}</p>
      <p>{"★".repeat(reviews[reviewTwo].stars)} </p>
    </div>
  );
}

export default HomeMainSection;
