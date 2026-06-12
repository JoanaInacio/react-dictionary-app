import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="word-card">
          <h2 className="word">{props.results.word}</h2>
          <span className="phonetic">{props.results.phonetic}</span>
          <Phonetic word={props.results.word} />
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return <Meaning meaning={meaning} key={index} />;
        })}
        <Photos word={props.results.word} />
      </div>
    );
  } else {
    return null;
  }
}