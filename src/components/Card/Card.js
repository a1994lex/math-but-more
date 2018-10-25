import "./Card.css";

import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
