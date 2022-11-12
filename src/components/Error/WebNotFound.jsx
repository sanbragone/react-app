import React from "react";
import "./webnotfound.css";
import { Link } from "react-router-dom";
import "animate.css";

function WebNotFound() {
  return (
    <Link to="/" className="linkNotFound animate__animated animate__bounce">
      Web no encontrada =[
    </Link>
  );
}

export default WebNotFound;
