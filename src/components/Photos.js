import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "./Photo";


function Articles() {
  const [photo, setPhotos] = useState([]);
  
  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => setPhotos(data));
   
  }, []);


  return (
    <div>
      {photo.map((photo) => (
        <Photo {...photo} />
      ))}
    </div>
  );
}

export default Articles;
