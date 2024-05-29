// Gallery.js
import { useContext } from "react";
import { SongContext } from "./SongContext";

import GalleryItem from "./GalleryItem";

function Gallery(props) {
  const galleryLayout = {
    "padding-left": "30px",
    'display': 'flex',
    'flex-wrap': 'wrap'
    
  };
  const display = props.data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });
  return <div style={galleryLayout}>{display}</div>;
}

export default Gallery;
