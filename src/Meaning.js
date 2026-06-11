import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      {props.meaning.example && <p className="example">"{props.meaning.example}"</p>}
    </div>
  );
}