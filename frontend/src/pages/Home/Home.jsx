import "./Home.css";
import Navbar from "../../components/Navbar/Navber";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src="hero_banner.jpg" alt="banner" className="banner-img" />
        <div className="hero-caption">
          <img src="hero_title.png" alt="title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks in the quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src="play_icon.png" alt="play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src="info_icon.png" alt="info" />
              More info
            </button>
          </div>
          <div>
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="other-cards">
        <TitleCards title={"Bollywood movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Crime TV Shows"} />
        <TitleCards title={"New on Netflix"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
