import React from 'react';
import Button from '../../components/Button/Button';
import SimpleLink from '../../components/SimpleLink';
import styles from './beOnStep.module.scss';

const BeOnStep = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src='/images/be_on_step_img@2x.png' alt='' />
        </div>
        <div className={styles.content}>
          <div className={styles.inner}>
            <h2 className={styles.title}>Be on step Ahead!</h2>
            <p className={styles.desc}>
              Use your advantage and defeat other fighters.
            </p>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src='/page/profit_item@2x.png' alt='profit' />
                </div>
                <p className={styles.text}>
                  +1% to the portfolio profit as a gift
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src='/page/stats_item@2x.png' alt='access' />
                </div>
                <p className={styles.text}>Access to battle stats</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                to='https://google.com'
                className={styles.button}
                type='link'
                view='largeRed'
                label='Buy NFT'
              />
              <SimpleLink label='How to buy NFT' to='https://google.com' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeOnStep;
