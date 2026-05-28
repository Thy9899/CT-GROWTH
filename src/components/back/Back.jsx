import React from "react";
import "./Back.css";
import { useNavigate } from "react-router-dom";

const Back = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="back-container"
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          navigate(-1); // Navigate back to the previous page
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor" /* Smoothly changes color with the text */
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
      <span className="back-text">Back</span>
    </div>
  );
};

export default Back;
