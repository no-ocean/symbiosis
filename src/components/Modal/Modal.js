import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './modal.module.scss';

const Modal = ({ children }) => {
  const [active, setActive] = useState(true);

  const onCloseClick = () => {
    setActive(false);
  };

  return (
    <div
      className={`${styles.overlay} ${active && styles.active}`}
      onClick={() => onCloseClick()}
    >
      <div
        className={styles.wrapper}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.close} onClick={() => onCloseClick()}>
          <FiX />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
