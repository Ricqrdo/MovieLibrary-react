import React from "react";
import "./_buttons.scss";

export default function Buttons() {
  return (
    <div className="buttons">
      {page !== 1 && <button onClick={previousPage}>Previous Page</button>}
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}
