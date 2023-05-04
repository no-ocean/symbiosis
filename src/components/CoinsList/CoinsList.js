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
        const { icon, value, title, link } = item;
        return (
          <CoinsListItem
            id={title + index}
            key={title + index}
            icon={icon}
            value={value}
            title={title}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default CoinsList;
