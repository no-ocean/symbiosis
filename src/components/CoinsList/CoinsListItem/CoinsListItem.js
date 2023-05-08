import React, { useState } from 'react';
import { FiX, FiTrendingUp } from 'react-icons/fi';
import NumericInput from '../../NumericInput';
import UpButton from '../../UpButton';
import styles from './coinsListItem.module.scss';

const CoinsListItem = ({ id, data }) => {
  const [modal, setModal] = useState(false);
  const [mobBlock, setMobBlock] = useState(false);

  const { icon, value, title, link } = data;

  return (
    <>
      <input id={id} className={styles.checkbox} type='checkbox' />
      <div className={styles.wrapper}>
        <label className={styles.clickWrapper} htmlFor={id}>
          <div className={styles.icon}>
            <img src={icon} alt={title} />
          </div>
          <div
            className={styles.title}
            onMouseEnter={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
          >
            USDT
          </div>
          <div className={styles.val}>${value}</div>
        </label>
        <div className={styles.btnsWrapper}>
          <div className={styles.numeric}>
            <NumericInput value={1000} className={styles.numericInput} />
          </div>
          <div className={styles.upBtnWrapp}>
            <UpButton id={id + 50} value={50} />
          </div>
          <div className={styles.upBtnWrapp}>
            <UpButton id={id + 100} value={100} />
          </div>
          <button
            className={styles.showMobileBlock}
            onClick={() => setMobBlock(true)}
          >
            View statistics
          </button>
          <div
            className={`${styles.mobileBlock} ${mobBlock && styles.mobActive}`}
          >
            <div className={`${styles.statistics} ${modal && styles.active}`}>
              <img src='./statistics/statistics.png' alt='' />
            </div>
            <div className={styles.mobileButtons}>
              <a
                href={link}
                className={styles.btn}
                target='_blank'
                rel='noreferrer'
              >
                <FiTrendingUp />
                <span className={styles.tooltip}>Go to {title}</span>
              </a>
              <button
                className={styles.closeBtn}
                onClick={() => setMobBlock(false)}
              >
                <FiX />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinsListItem;
