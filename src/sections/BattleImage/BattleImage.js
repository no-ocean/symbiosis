import React from 'react';
import styles from './battleImage.module.scss';

const BattleImage = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container-fluid'>
        <div className={styles.row}>
          <div className={styles.description}>
            <h4>
              The list of participants will become available after the start of
              the battle
            </h4>
          </div>
          <div className={styles.img}>
            <img src='./images/battle@2x.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleImage;
