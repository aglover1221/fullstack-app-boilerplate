import React from "react";

const FullPageError = props => {
  return (
    <div className="full-page-error-container">
      <p>{props.error}</p>
    </div>
  );
};

export default FullPageError;
