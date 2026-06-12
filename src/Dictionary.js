import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    const apiKey = "6t904043c5f4de3o104d9f1b3e869ba0";
    const url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="search-card">
        <h2 className="search-heading">What word do you want to look up?</h2>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Type a word.." onChange={updateKeyword} autoFocus />
          <button type="submit">Search</button>
        </form>
        <p className="search-hint">i.e. paris, wine, yoga, coding</p>
      </div>
      <Results results={results} />
    </div>
  );
}