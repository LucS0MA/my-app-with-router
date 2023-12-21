import { useParams } from "react-router-dom";
import GalleryMusic from "../components/GalleryMusic";
import GalleryMovies from "../components/GalleryMovies";

function Gallery() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="PresTitle">Hello from Gallery {id}</h1>
      {id === "1" && <GalleryMusic galleryId={id} />}
      {id === "2" && <GalleryMovies galleryId={id} />}
    </div>
  );
}

export default Gallery;
