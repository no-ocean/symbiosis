import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './listOfPortfolios.module.scss';
import PortfolioRow from './PortfolioRow';

const ListOfPortfolios = ({ data }) => {
  const [sortData, setSortData] = useState([...data]);

  useEffect(() => {
    if (data.some((item) => item.winPosition !== undefined)) {
      setSortData(data.sort((a, b) => a.winPosition - b.winPosition));
    } else {
      setSortData(data);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className='container-fluid'>
        <h3>List of Portfolios</h3>
        <div className={styles.table}>
          {sortData.map((item, index) => {
            return <PortfolioRow key={index + item.title} data={item} />;
          })}
        </div>
        <div className={styles.pagination}>
          <Button label='Show next 20' view='largeBorderRed' />
          <Button label='Show all' view='largeBorderRed' />
        </div>
      </div>
    </div>
  );
};

export default ListOfPortfolios;
