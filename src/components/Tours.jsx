import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import Loading from "./Loading";

function Tours({ url }) {
  const [tours, setTours] = useState("");
  const [isLoading, SetIsLoading] = useState(false);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(updatedTours);
  };

  const fetchData = async () => {
    try {
      SetIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      SetIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  // if()
  if (tours.length === 0) {
    return (
      <div className="title">
        <h3>NO Tours left</h3>;
        <div>
          <button className="btn" onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="title">
        <h3>Our Tours</h3>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours &&
          tours.map((tour) => {
            return (
              <div key={tour.id}>
                <Tour tour={tour} removeTour={removeTour} />;
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Tours;
