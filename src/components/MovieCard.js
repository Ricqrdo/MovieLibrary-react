import React from "react";

export default function MovieCard({ title, year, type }) {
  return (
    <div>
      <h4>
        {title} - {year}
      </h4>
      <span>{type}</span>
    </div>
  );
}
