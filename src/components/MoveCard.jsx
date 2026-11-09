import React from 'react'
import movie10 from "../assets/magale.jpg";
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
import movie15 from "../assets/oop.webp";
import movie14 from "../assets/visheshammm.png";
 


import "./moviecard.css";

function MoveCard({Mtitle}) {
  return (
    <div>
        <div className="movies">
      <h2>{Mtitle}</h2>
      <div className="movie-list">
        <img src={movie10} alt="" />
        <img src={movie2} alt="" />
        <img src={movie3} alt="" />
        <img src={movie11} alt="" />
        <img src={movie5} alt="" />
        <img src={movie6} alt="" />
        <img src={movie4} alt="" />
        <img src={movie7} alt="" />
        <img src={movie8} alt="" />
        <img src={movie9} alt="" />
        <img src={movie1} alt="" />
        <img src={movie12} alt="" />
        
      </div>
      <div className="movies">
      <h2>{Mtitle}</h2>
      <div className="movie-list">
        <img src={movie1} alt="" />
        <img src={movie2} alt="" />
        <img src={movie3} alt="" />
        <img src={movie11} alt="" />
        <img src={movie12} alt="" />
        <img src={movie15} alt="" />
        <img src={movie14} alt="" />

      </div>
      
      <video width="500px" height="350" controls>
        <source src="src/assets/sirr.mp4" type="video/mp4"></source>
      </video>
    </div>
  </div>
</div>

    

  )
}


export default MoveCard