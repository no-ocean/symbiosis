import React from 'react';
import styles from './button.module.scss';

// this component  might be a button or an external link (not inernal and not for router).
// for use link you should directly add type with 'link' value;
// in other cases this component will be a button.
// view might be: 'largeRed', 'largeBorderRed', 'shortRed', 'smallBorderRed', 'smallBorderWhite'
// view is 'largeRed' by default

const Button = ({ label, view = 'largeRed', type, className, onClick, to }) => {
  return type === 'link' ? (
    <a
      href={to}
      className={`btn ${styles.button} ${styles[view]} ${
        className ? className : ''
      }`}
      target='_blank'
      rel='noreferrer'
    >
      {label}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[view]} ${
        className ? className : ''
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
