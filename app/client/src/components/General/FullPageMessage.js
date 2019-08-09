import React from "react";

const FullPageMessage = props => {
  return (
    <div className="full-page-message-container">
      <p>{props.message}</p>
    </div>
  );
};

export default FullPageMessage;
