import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from "../../store/spots";
import { useParams } from "react-router-dom";
import { getOneSpot } from '../../store/spots';
import { getReviews, deleteReview } from "../../store/reviews";
import Calendar from 'react-calendar';
import BookingForm from '../BookingForm'
import ReviewForm from '../ReviewForm';
import EditSpotModal from "../EditSpotModal";
import { deleteSpot } from "../../store/spots";
import { getHosts} from '../../store/hosts';


import './SpotPage.css';

const SpotPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const spot = useSelector((state) => state.spots[id]); 
    const photos = spot?.photos.split(" ");
    const firstPhoto = photos?.splice(0, 1);
    const nextPhotos = photos?.splice(0, 4);
    const user = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews.reviews);
    console.log(reviews);

const hosts = useSelector((state) => {
  return state.hosts.allHosts;
});

//const host = hosts[spot.hostId]?.name;


useEffect(() => {
  dispatch(getOneSpot(id),
  dispatch(getReviews(id)));
  dispatch(getHosts());
}, [id]);

    const deleteReviewButton = (id) => {
      let result = window.confirm(
        "Are you sure you want to delete your review?"
      );
      if (result) {
        dispatch(deleteReview(id));
      }
    };

    const deleteSpotButton = (id) => {
      let result = window.confirm(
        "Are you sure you want to delete this spot?"
      );
      if (result) {
        dispatch(deleteSpot(id));
      }
    };
  if (!spot) return null;

    return (
      <div>
        <div className="container-div">
          <div className="spot-div">
            <div className="name">{spot.name}</div>
            <div className="rating">{`⭐️ ${spot.avg_Rating}`}</div>
            <div className="planet">{`${spot.planet}, ${spot.system}`}</div>
            <img className="firstPhoto" src={firstPhoto}></img>
            <img className="secondPhoto" src={nextPhotos[0]}></img>
            <img className="thirdPhoto" src={nextPhotos[1]}></img>
            <img className="fourthPhoto" src={nextPhotos[2]}></img>
            <img className="fifthPhoto" src={nextPhotos[3]}></img>
            <div className="edit-spot">
              {" "}
              <EditSpotModal />
              <button
                className="delete-spot"
                id="deleteSpot"
                onClick={() => deleteSpotButton(spot.id)}
              >
                Delete
              </button>
            </div>{" "}
            {photos.map((photo) => {
              console.log(photo);
              return <img className="otherPhotos" src={photo}></img>;
            })}
            <div className="arrangements">{`${spot.arrangements}
            `}</div>
            <div className="description">{spot.description}</div>
            <div className="reviews">
              <ReviewForm user={user} spot={spot} />
              <div className="reviews-list">
                {`${spot.avg_Rating} (${reviews.length} reviews)`}
                {reviews.map((review) => {
                  const reviewVals = (
                    <div className="review">
                      <h3>{`${review.author} - ${review.createdAt}`}</h3>
                      <div>{review.rating}</div>
                      <div>{review.review}</div>
                      <div className="delete">
                        {
                          <button
                            id="deleteReview"
                            onClick={() => deleteReviewButton(review.id)}
                          >
                            Delete
                          </button>
                        }
                      </div>
                    </div>
                  );
                  return reviewVals;
                })}
              </div>
            </div>
            <div className="price">{`${spot.price} / night`}</div>
            <div className="book">
              <div>
                <BookingForm
                  user={user}
                  spot={spot}
                  host={spot.hostId}
                  id={id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SpotPage;