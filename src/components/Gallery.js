// Gallery.js
import { useContext } from "react";
import GalleryItem from "./GalleryItem";
import { SongContext } from "./SongContext";

function Gallery() {
  const songData = useContext(SongContext);

  const songItems = songData.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });
  return <div>{songItems}</div>;
}

export default Gallery;
