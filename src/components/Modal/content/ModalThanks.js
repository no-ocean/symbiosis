import React from 'react';
import Button from '../../Button/Button';
import styles from '../modal.module.scss';

const ModalThanks = () => {
  return (
    <>
      <div className={styles.img}>
        <img src='./common/congrats@2x.png' alt='congrats' />
      </div>
      <h4 className={styles.title}>CONGRATULATIONS</h4>
      <p className={styles.description}>
        We are glad to see that you are one of us! At the beginning of the
        battle, we will credit you with +1% to profit, and you will also be able
        to follow the statistics of the battle for all participants!
      </p>

      <div className={styles.buttons}>
        <Button label={'Thanks'} view={'largeRed'} />
      </div>
    </>
  );
};

export default ModalThanks;
