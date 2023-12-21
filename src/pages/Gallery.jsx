import { useParams } from "react-router-dom";

function Gallery() {
  const { id } = useParams();

  return <h1 className="PresTitle">Hello from Gallery {id}</h1>;
}

export default Gallery;
