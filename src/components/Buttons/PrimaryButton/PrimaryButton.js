import React from "react";

import "./PrimaryButton.css";

type Props = {
   onClick: ()=>void,
   text: string,
}
function PrimaryButton( props:Props ) {
  return (
    <div className="PrimaryButtonContainer">
      <div className="PrimaryButton" onClick={props.onClick}>
        {props.text}
      </div>
    </div>
  );
}

export default PrimaryButton;
