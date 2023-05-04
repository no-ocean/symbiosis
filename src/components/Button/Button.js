import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

// this component  might be a button or an external link (not inernal and not for router).
// for use link you should directly add type with 'link' value;
// in other cases this component will be a button.
// view might be: 'largeRed', 'largeBorderRed', 'shortRed', 'smallBorderRed', 'smallBorderWhite', 'largeGray'
// view is 'largeRed' by default

const Button = ({
  label,
  view = 'largeRed',
  type,
  className,
  onClick,
  to,
  ...props
}) => {
  if (type === 'link') {
    return (
      <a
        href={to}
        className={`btn ${styles.button} ${styles[view]} ${
          className ? className : ''
        }`}
        target='_blank'
        rel='noreferrer'
        {...props}
      >
        <span className={styles.label}>{label}</span>
      </a>
    );
  } else if (type === 'routerLink') {
    return (
      <Link
        to={to}
        className={`btn ${styles.button} ${styles[view]} ${
          className ? className : ''
        }`}
        {...props}
      >
        <span className={styles.label}>{label}</span>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${styles.button} ${styles[view]} ${
          className ? className : ''
        }`}
        {...props}
      >
        <span className={styles.label}>{label}</span>
      </button>
    );
  }
};

export default Button;
