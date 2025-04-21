import React, { useState } from "react";

export default function NewFile() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  const handleChange = (e) => {
    setTotalStars(parseInt(Boolean(e.target.value, 10) ? e.target.value : 5));
  };

  return (
    <div className="App">
      <h1>Star rating</h1>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 0;

        return (
          <label key={index}>
            <input
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
      <br />
      <br />
      <p>Your rating is: {rating}</p>
      <br />
      <label style={{ fontWeight: 400 }}>
        Number of stars:
        <input
          style={{ marginLeft: "12px", maxWidth: "50px" }}
          onChange={handleChange}
          value={totalStars}
          type="number"
          min={1}
        />
      </label>
    </div>
  );
}
