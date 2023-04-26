import React from 'react';
import Logo from '../Logo';
import styles from './header.module.scss';
import Button from '../Button/Button';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container-fluid'>
        <div className={styles.headerRow}>
          <Logo />
          <Navigation />
          <Button
            to='https://google.com'
            className={styles.button}
            type='link'
            view='smallBorderRed'
            label='Connect Wallet'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
