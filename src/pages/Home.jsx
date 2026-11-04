import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from "../assets/house.svg";
import movieIcon from "../assets/film-slate.svg";
import tvIcon from "../assets/television-simple.svg";
import plusIcon from "../assets/plus.svg";
import trendIcon from "../assets/trend-up.svg";
import shuffleIcon from "../assets/shuffle.svg";

import title from "../assets/netnet.png";

import MoveCard from "../components/MoveCard";

import "./home.css";

function Home() {
  return (
    <div className="netflix">
      <div className="sidebar">

        <button>
          <img src={searchIcon} alt="Search" />
        </button>
        
        <button className="active">
          <img src={homeIcon} alt="Home" />
        </button>

        <button>
          <img src={movieIcon} alt="Movies" />
        </button>

        <button>
          <img src={tvIcon} alt="TV Shows" />
        </button>

        <button>
          <img src={plusIcon} alt="My List" />
        </button>

        <button>
          <img src={trendIcon} alt="Trending" />
        </button>

        <button>
          <img src={shuffleIcon} alt="Shuffle" />
        </button>

      </div>

      <div className="home-main">
        

        <div className="hero">
          <div className="hero-content">
            <img src={title} alt="Movie Title" />
            <div className="movie-info">
              <p className="ss">8/10</p>
              <p >2M Streams</p>
              <p className="ss">2026</p>
              <p>Action</p>
            </div>

            <p>
              Experience an unforgettable cinematic journey.
              Discover amazing stories, action and entertainment.
            </p>

            <div className="buttons">

              <button className="play">
                Play
              </button>

              <button className="trailer">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <div className="movie-sections">
          <MoveCard Mtitle="New This Week" />
          <MoveCard Mtitle="Popular on Netflix" />
          <MoveCard Mtitle="Trending Now" />
          <MoveCard Mtitle="Action Movies" />

        </div>

      </div>

    </div>
  );
}

export default Home;