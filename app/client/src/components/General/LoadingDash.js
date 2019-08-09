import React from "react";

import loadingLinear from "../../assets/loading_linear";

export default function LoadingDash(props) {
  return (
    <div className="loading-container row">
      <img style={{ width: "200px" }} src={loadingLinear} />
    </div>
  );
}
