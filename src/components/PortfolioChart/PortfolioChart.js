import React from 'react';
import styles from './portfolioChart.module.scss';

const PortfolioChart = () => {
  return (
    <div className='container-fluid'>
      <h3 className={styles.title}>Portfolio Chart</h3>
      <div className={styles.chart}>
        <img src='./charts/portfolio_chart@2x.png' alt='' />
      </div>
    </div>
  );
};

export default PortfolioChart;
