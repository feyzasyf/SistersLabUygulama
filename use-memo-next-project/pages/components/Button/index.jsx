import React from "react";

const Button = ({ classes, text, handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;
