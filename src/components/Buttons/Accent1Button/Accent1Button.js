import React from "react";

import "./Accent1Button.css";

type Props = {
   onClick: () => void,
   text: string,
}
function Accent1Button( props:Props ) {
  return (
    <div className="Accent1ButtonContainer">
      <div className="Accent1Button" onClick={props.onClick}>
        {props.text}
      </div>
    </div>
  );
}

export default Accent1Button;
