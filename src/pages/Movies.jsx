import React from "react";
import "./movies.css";

import movieLogo from "../assets/banththa.png";

import plusIcon from "../assets/plus.svg";
import likeIcon from "../assets/thumbs-up.svg";
import muteIcon from "../assets/speaker-simple-slash.svg";


import movie11 from "../assets/mathu.jpg";
import movie1 from "../assets/dies.jpg";
import movie12 from "../assets/emi.jpg";
import movie2 from "../assets/karupp.jpg";
import movie3 from "../assets/jannanayagan.jpg";
import movie4 from "../assets/masss.jpg";
import movie5 from "../assets/leo.jpg";

import movie6 from "../assets/therii.jpg";
import movie7 from "../assets/jhonny.jpg";
import movie8 from "../assets/thankan.gif";
import movie9 from "../assets/every-vijay.webp";

function Movies() {
  return (
    <div className="movie-card">
      <div
        className="movie-background">

      </div>

      <div className="movie-content">

        <img src={movieLogo}alt="Movie Logo"className="movie-logo"/>

        <div className="movie-buttons">
          <button className="play-btn">
            Play
          </button>

          <button className="icon-btn">   
          <img src={plusIcon} alt="My List" />
          </button>

          <button className="icon-btn"><img src={likeIcon} alt="Like" /></button>
          <button className="mute-btn"><img src={muteIcon} alt="Mute" /></button>

        </div>

        <div className="movie-details">
          <div className="movie-left">

            <p className="movie-year">
              2026 &nbsp; &nbsp; 2h 36m &nbsp; &nbsp; HD
            </p>

            <p className="movie-rating">
              U/A 13+ &nbsp; violence, mature themes, tobacco use
            </p>

            <h3>
              Watch in Tamil, Telugu, Hindi, Malayalam, Kannada
            </h3>

            <p className="movie-description">
              In 1986 Madras, a timid boy accidentally traps
              a feared gangster in a school restroom, where
              an unlikely friendship brings out new sides
              of them both.
            </p>

          </div>

          <div className="movie-right">

            <p>
              <h2>Cast:</h2> Vijay Sethupathi,
              Lijomol Jose, Sai Prithviraj, more
            </p>

            <p>
              <h2>Genres:</h2> Drama Movies,
              Comedy Movies, Tamil-Language Movies
            </p>

            <p>
              <h2>This Movie Is:</h2> Heartfelt
            </p>

          </div>
          

        </div>

        <h6>More Like This</h6>
        <div className="movie-list">
        <img src={movie2} alt="" /> 
        <img src={movie1} alt="" />
        <img src={movie11} alt="" />
        <img src={movie3} alt="" />
        <img src={movie4} alt="" />
        <img src={movie5} alt="" />
        
        
        </div>
        <div className="movie-list">
        <img src={movie7} alt=""/>
        <img src={movie6} alt="" />
        <img src={movie8} alt="" />
        <img src={movie9} alt="" />
        <img src={movie12} alt="" />
        <img src={movie11} alt="" />
        </div>
      
      </div>

    </div>
  );
}

export default Movies;