import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button
      className={`button button--${props.size || 'default'} ${props.danger && 'button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
