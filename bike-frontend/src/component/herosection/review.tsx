import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import alexanderImg from "../../assets/profilee.png";
import oliviaImg from "../../assets/profile.png";
import ethanImg from "../../assets/girlprofile.png";
import sophiaImg from "../../assets/profile.png";

const reviews = [
  {
    name: "Alexander Bennett",
    rating: 4.5,
    review: "Great bike service! A bit slow but worth it. My bike runs great.",
    image: alexanderImg,
  },
  {
    name: "Olivia Carter",
    rating: 4.0,
    review:
      "Good service and helpful staff. Slight delay, but my bike is running smoothly.",
    image: oliviaImg,
  },
  {
    name: "Ethan Harrison",
    rating: 4.0,
    review: "Reliable service and easy to book, my bike’s in top shape.",
    image: ethanImg,
  },
  {
    name: "Sophia Mitchell",
    rating: 4.0,
    review:
      "Solid bike service with friendly staff. Took a bit longer, but the results are excellent.",
    image: sophiaImg,
  },
];

const renderStars = (rating: any) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === Math.ceil(rating)) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

const ReviewsSection: React.FC = () => {
  return (
    <div className="bg-white p-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Reviews:</h2>
        <div className="flex justify-center text-2xl mt-2">
          {renderStars(4.5)}
        </div>
      </div>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{review.name}</h3>
            <div className="flex justify-center mb-2">
              {renderStars(review.rating)}
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
