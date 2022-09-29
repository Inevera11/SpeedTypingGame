import React from "react";
import Button from "./Button";

const Footer = ({ timeRemaining }) => {
  return (
    <div>
      <h1>Time remaining: {timeRemaining}</h1>
      <Button />
    </div>
  );
};

export default Footer;
