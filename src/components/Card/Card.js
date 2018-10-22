import "./Card.css";

import React from "react";

function Card(props) {
  return (
    <div className="CardContainer">
      <div className="Card">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
