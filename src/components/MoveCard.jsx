import React from 'react'
import movie1 from "../assets/pp.webp";
import movie2 from "../assets/kariup.webp";
import movie3 from "../assets/jana.webp";
import movie4 from "../assets/master.webp";
import movie5 from "../assets/vijay.webp";
import movie6 from "../assets/theri.avif";
import movie7 from "../assets/bee.webp";
import movie8 from "../assets/thankan.gif";
import movie9 from "../assets/every-vijay.webp";


import "./moviecard.css";

function MoveCard({Mtitle}) {
  return (
    <div>
        <div className="movies">
      <h2>{Mtitle}</h2>
      <div className="movie-list">
        <img src={movie1} alt="" />
        <img src={movie2} alt="" />
        <img src={movie3} alt="" />
        <img src={movie4} alt="" />
        <img src={movie5} alt="" />
        <img src={movie6} alt="" />
        <img src={movie7} alt="" />
        <img src={movie8} alt="" />
        <img src={movie9} alt="" />
        
      </div>
      <div className="movies">
      <h2>{Mtitle}</h2>
      <div className="movie-list">
        <img src={movie1} alt="" />
        <img src={movie2} alt="" />
        <img src={movie3} alt="" />
        <img src={movie4} alt="" />
        
      </div>
    </div>
    </div>
    </div>

    

  )
}


export default MoveCard