import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../store/reviews";
// import { useHistory } from 'react-router-dom';
import "./ReviewForm.css";

const ReviewForm = ({ user, spot }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review,
      author: user.username,
      rating,
      userId: user.id,
      spotId: spot.id,
    };
    let createdReview = await dispatch(createReview(newReview));
    setReview("");
  };

  return (
    <section className="new-form-holder centered middled">
      <form className="review-form" onSubmit={handleSubmit}>
        <textarea
          className="review-input"
          type="text"
          placeholder="Leave a review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <select className="stars" onChange={(e) => setRating(e.target.value)}>
          <option value="" disabled selected>
            Stars
          </option>
          <option>⭐️</option>
          <option>⭐️⭐️</option>
          <option>⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ReviewForm;
