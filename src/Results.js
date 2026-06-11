import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        <span className="phonetic">{props.results.phonetic}</span>
        {props.results.meanings.map(function (meaning, index) {
          return <Meaning meaning={meaning} key={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}