import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Phonetic(props) {
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    setAudioUrl(null);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
    axios.get(url).then((response) => {
      const entries = response.data;
      let found = null;
      entries.forEach((entry) => {
        entry.phonetics.forEach((p) => {
          if (!found && p.audio && p.audio !== "") {
            found = p.audio;
          }
        });
      });
      setAudioUrl(found);
    }).catch(() => {
      setAudioUrl(null);
    });
  }, [props.word]);

  function playAudio() {
    const sound = new Audio(audioUrl);
    sound.play();
  }

  if (audioUrl) {
    return (
      <button className="phonetic-button" onClick={playAudio} title="Listen">
        🔊
      </button>
    );
  } else {
    return null;
  }
}