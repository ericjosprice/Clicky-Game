import React from "react";
import "./style.css";

function Jumbotron (){
return (
    <div className="jumbotron jumbotron-fluid mb-0">
  <div className="container">
    <h1 className="display-4">Family Guy Memory Game</h1>
    <p className="lead">Character cards will randomly change position whenever clicked. Click each card only once. Remember the cards that have already been clicked. If you click a card more than once then you lose.</p>
  </div>
</div>
);

}

export default Jumbotron;