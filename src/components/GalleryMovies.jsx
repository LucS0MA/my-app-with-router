import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";
import movie6 from "../assets/movie6.jpg";
import movie7 from "../assets/movie7.jpg";
import "./GalleryMusic.css";

const GalleryMovies = () => {
  return (
    <>
      <div className="Gallery">
        <div className="Card">
          <img src={movie1} className="Images one" alt="" />
        </div>
        <div className="Card">
          <img src={movie2} className="Images two" alt="" />
        </div>
        <div className="Card">
          <img src={movie3} className="Images three" alt="" />
        </div>
        <div className="Card">
          <img src={movie7} className="Images four" alt="" />
        </div>
        <div className="Card">
          <img src={movie5} className="Images five" alt="" />
        </div>
        <div className="Card">
          <img src={movie6} className="Images six" alt="" />
        </div>
      </div>
    </>
  );
};

export default GalleryMovies;
