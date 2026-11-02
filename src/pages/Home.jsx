import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from "../assets/house.svg";
import movieIcon from "../assets/film-slate.svg";
import tvIcon from "../assets/television-simple.svg";
import plusIcon from "../assets/plus.svg";
import trendIcon from "../assets/trend-up.svg";

import title from "../assets/titlecard.jpg";

import movie1 from "../assets/vijay.webp";
import movie2 from "../assets/thankan.gif";
import movie3 from "../assets/vijay.webp";
import movie4 from "../assets/mehhh.jpeg";
import movie5 from "../assets/vijay.webp";
import movie6 from "../assets/thankan.gif";
import movie7 from "../assets/every-vijay.webp";
import movie8 from "../assets/mehhh.jpeg";

import "./home.css";

function Home() {
return (
<div className="netflix">
  <div className="sidebar">
    <img src={searchIcon} alt="Search" />
    <img src={homeIcon} alt="Home" />
    <img src={movieIcon} alt="Movies" />
    <img src={tvIcon} alt="TV" />
    <img src={plusIcon} alt="Add" />
    <img src={trendIcon} alt="Trending" />
  </div>
  <div className="home-main">
    <div className="hero">

      <img src={title} alt="Movie Title" />

      <p>Rating : 6/10</p>
      <p>2M Streams</p>

      <div className="buttons">
        <button className="play">Play</button>
        <button className="trailer">Watch Trailer</button>
      </div>

    </div>
    <div className="movies">
      <h2>New This Week</h2>
      <div className="movie-list">
        <img src={movie1} alt="" />
        <img src={movie2} alt="" />
        <img src={movie3} alt="" />
        <img src={movie4} alt="" />
        <img src={movie5} alt="" />
        <img src={movie6} alt="" />
        <img src={movie7} alt="" />
        <img src={movie8} alt="" />
      </div>
    </div>
  </div>
</div>

);
}

export default Home;