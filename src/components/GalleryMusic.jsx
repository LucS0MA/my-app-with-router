import music1 from "../assets/music1.jpg";
import music2 from "../assets/music2.jpg";
import music3 from "../assets/music3.jpg";
import music4 from "../assets/music4.jpg";
import music5 from "../assets/music5.jpg";
import music6 from "../assets/music6.jpg";
import "./GalleryMusic.css";

const GalleryMusic = () => {
  return (
    <>
      <div className="Gallery">
        <div className="Card">
          <img src={music1} className="Images one" alt="" />
        </div>
        <div className="Card">
          <img src={music2} className="Images two" alt="" />
        </div>
        <div className="Card">
          <img src={music3} className="Images three" alt="" />
        </div>
        <div className="Card">
          <img src={music4} className="Images four" alt="" />
        </div>
        <div className="Card">
          <img src={music5} className="Images five" alt="" />
        </div>
        <div className="Card">
          <img src={music6} className="Images six" alt="" />
        </div>
      </div>
    </>
  );
};

export default GalleryMusic;
