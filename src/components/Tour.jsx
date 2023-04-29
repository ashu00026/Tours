import React, { useState } from "react";

function Tour({ tour, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  console.log(tour);
  return (
    <article className="single-tour">
      <img
        src={tour.image}
        alt={tour.name}
        // style={{ width: "150px" }}
        className="img"
      />
      <span className="tour-price">{tour.price}</span>
      <h3>{tour.name}</h3>
      <div className="tour-info">
        <p>
          {readMore ? tour.info : tour.info.substring(0, 200)}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "readLess" : "readMore"}
          </button>
        </p>
        <div>
          <button className="btn" onClick={() => removeTour(tour.id)}>
            not Interested
          </button>
        </div>
        {/* <p>{tour.info}</p> */}
      </div>
    </article>
  );
}

export default Tour;
