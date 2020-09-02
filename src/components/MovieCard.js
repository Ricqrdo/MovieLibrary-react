import React from "react";
import "./_MovieCard.scss";

export default function MovieCard({ title, year, type, poster }) {
  return (
    <div className="moviecard-container">
      <div className="moviecard-image">
        <img src={poster} alt={title} />
      </div>
      <div className="moviecard-desc">
        <h3>
          Title: <span>{title}</span>
        </h3>
        <h3>
          Year: <span>{year}</span>
        </h3>
        <h3>
          Type: <span>{type}</span>
        </h3>
      </div>
    </div>
  );
}
