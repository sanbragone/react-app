import React from "react";
import { Ripples } from "@uiball/loaders";
import "./loader.css";

function Loader() {

  return (
    <div className="loader">
      <Ripples size={145} speed={2} color="black" />
    </div>
  );
}

export default Loader;
