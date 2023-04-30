import React from 'react';
import Logo from '../Logo';
import styles from './header.module.scss';
import Navigation from '../Navigation';
import MobileMenuBtn from '../MobileMenuBtn';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isTablet = useMediaQuery({ maxDeviceWidth: 992 });

  return (
    <header className={styles.header}>
      <div className='container-fluid'>
        <div className={styles.headerRow}>
          <Logo />
          <Navigation />
          {isTablet && <MobileMenuBtn className={styles.menuBtn} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
