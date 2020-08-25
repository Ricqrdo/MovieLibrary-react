import React, { useState } from "react";

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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={word}
          onChange={onChange}
          autoFocus
        />
      </form>
    </div>
  );
}
