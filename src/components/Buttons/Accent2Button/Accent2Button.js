import React from "react";

import "./Accent2Button.css";

type Props = {
   onClick: () => void,
   text: string,
}
function Accent2Button( props:Props ) {
  return (
    <div className="Accent2ButtonContainer">
      <div className="Accent2Button" onClick={props.onClick}>
        {props.text}
      </div>
    </div>
  );
}

export default Accent2Button;
