import React from 'react';
import SmallGrayBtn from '../../components/SmallGrayBtn/SmallGrayBtn';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './myPortfolio.module.scss';
import ShareModal from '../../components/ShareModal/ShareModal';
import MyPortfolioRow from '../../components/MyPortfolioRow/MyPortfolioRow';

const MyPortfolio = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className='container-fluid'>
        <div className={styles.titleRow}>
          <h3>My Portfolio</h3>
          <div className={styles.shareBlock}>
            <SmallGrayBtn>
              <FiArrowUpRight />
              <span>Share</span>
            </SmallGrayBtn>
            <ShareModal className={styles.hover} />
          </div>
        </div>

        <div className={styles.portfolioRow}>
          <MyPortfolioRow data={data} />
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
