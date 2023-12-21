import { useParams } from "react-router-dom";
import GalleryMusic from "../components/GalleryMusic";
import GalleryMovies from "../components/GalleryMovies";

function Gallery() {
  const { id } = useParams();

  return (
    <div>
      {id === "1" && <GalleryMusic />}
      {id === "2" && <GalleryMovies />}
    </div>
  );
}

export default Gallery;
