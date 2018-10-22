import React from "react";

import "./SubjectTag.css";

type Props = {
   onClick: subject => void,
   subject: string,
}
function SubjectTag( props:Props ) {
    return (
      <div className="SubjectTagContainer">
        <div
          className="SubjectTag"
          onClick={() => props.onClick(props.subject)}
        >
          Subject: {props.subject}
        </div>
      </div>
    );
}

export default SubjectTag;
