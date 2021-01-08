import React from "react";
import "./Loading.css";
import CircularProgress from "@material-ui/core/CircularProgress";
function Loading() {
  return (
    <div className="loading">
      <CircularProgress />
      <h1 className="loading-text">Please accept location request</h1>
    </div>
  );
}

export default Loading;
