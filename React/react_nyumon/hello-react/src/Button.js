import React from 'react';

const Button = (props) => {
  return(
    <button className="ui basic button">
      <i className="icon user"></i>
      {props.title}
    </button>
  );
};

export default Button;
