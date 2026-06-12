import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Photos(props) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    setPhotos(null);
    const apiKey = "6t904043c5f4de3o104d9f1b3e869ba0";
    const url = `https://api.shecodes.io/images/v1/search?query=${props.word}&key=${apiKey}`;
    axios.get(url).then((response) => {
      setPhotos(response.data.photos);
    }).catch(() => {
      setPhotos(null);
    });
  }, [props.word]);

  if (photos && photos.length > 0) {
    return (
      <div className="Photos">
        {photos.slice(0, 6).map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" rel="noreferrer" key={index}>
              <img src={photo.src.landscape} alt={photo.alt} className="photo" />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}