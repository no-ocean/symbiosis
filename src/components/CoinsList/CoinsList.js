import React from 'react';
import styles from './coinsList.module.scss';
import CoinsListItem from './CoinsListItem/CoinsListItem';

const data = [
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
  {
    icon: './coins/act.png',
    value: '19773.56',
    title: 'USDT',
    link: 'https://google.com',
  },
];

const CoinsList = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => {
        return (
          <CoinsListItem
            id={item.title + index}
            key={item.title + index}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default CoinsList;
