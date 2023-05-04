import React from 'react';
import { BsTrash3 } from 'react-icons/bs';
import Button from '../Button/Button';
import NumericInput from '../NumericInput/NumericInput';
import SideBarItemWrapp from '../SideBarItemWrapp/SideBarItemWrapp';
import styles from './sidebarBalance.module.scss';

const portfolio = [
  {
    title: 'USDT',
    icon: './coins/act.png',
    value: 0,
  },
  {
    title: 'USDT',
    icon: './coins/act.png',
    value: 0,
  },
  {
    title: 'USDT',
    icon: './coins/act.png',
    value: 0,
  },
  {
    title: 'USDT',
    icon: './coins/act.png',
    value: 0,
  },
];

const SidebarBalance = () => {
  return (
    <SideBarItemWrapp>
      <div className={styles.balancePart}>
        <div>
          <h5>Balance</h5>
          <p className={styles.balance}>$1000</p>
        </div>
        <div>
          <h5>My Portfolio</h5>
          <p className={styles.myPortfolioBalance}>$0</p>
        </div>
      </div>

      <div className={styles.coinsPart}>
        {portfolio.map((item, index) => {
          return (
            <div className={styles.coinItem} key={item.title + index}>
              <div className={styles.coinIcon}>
                <img src={item.icon} alt={item.title} />
              </div>
              <span className={styles.coinTitle}>{item.title}</span>
              <div className={styles.coinInput}>
                <NumericInput value={item.value} />
              </div>
              <button className={styles.coinRemove}>
                <BsTrash3 />
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.buttonsPart}>
        <Button disabled label={'Create portfolio'} />
        <Button view='largeGray' label={'Continue Editing'} />
      </div>
    </SideBarItemWrapp>
  );
};

export default SidebarBalance;
