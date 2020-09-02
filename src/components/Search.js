import React, { useState } from "react";
import "./_Search.scss";

export default function Search({ setKeyword }) {
  const [word, setWord] = useState("");

  const onChange = (e) => {
    const keyword = e.target.value;
    setWord(keyword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (word) {
      setKeyword(word);
      setWord("");
    } else {
      console.log("no word");
    }
    console.log(word);
  };

  return (
    <div className="search-container">
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={word}
          onChange={onChange}
          autoFocus
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}
