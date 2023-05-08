import React from 'react';
import Button from '../../Button/Button';
import styles from '../modal.module.scss';

const PortfolioCreated = () => {
  return (
    <>
      <div className={styles.imgCreated}>
        <img src='./common/portfolio_created@2x.png' alt='congrats' />
      </div>
      <h4 className={styles.title}>Portfolio Created!</h4>

      <div className={`${styles.buttons} ${styles.paddedButtons}`}>
        <Button
          label={'To the battle page'}
          type={'routerLink'}
          view={'largeRed'}
          to='/'
        />
        <Button
          label={'Read more'}
          type={'link'}
          view={'largeBorderRed'}
          to='https://google.com'
        />
      </div>
    </>
  );
};

export default PortfolioCreated;
