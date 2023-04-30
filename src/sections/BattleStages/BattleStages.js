import React from 'react';
import Button from '../../components/Button/Button';
import SimpleLink from '../../components/SimpleLink';
import styles from './battleStages.module.scss';

const BattleStages = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`container-fluid ${styles.line}`}>
        <h2 className={styles.title}>Battle Stages</h2>
        <div className={styles.main}>
          {/* item-01 */}
          <div className={styles.item}>
            <div className={styles.num}>
              <img src='/page/item_01@2x.png' alt='1' />
            </div>
            <div className={styles.content}>
              <h4 className={styles.itemTitle}>Registration</h4>
              <div className='row'>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <span>Link a Wallet</span>
                  <span className={styles.note}>
                    * You dont need real money
                  </span>
                </div>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <SimpleLink
                    to='https://google.com'
                    label='How to create wallet'
                  />
                  <SimpleLink
                    to='https://google.com'
                    label='How to link your wallet'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* item-02 */}
          <div className={styles.item}>
            <div className={styles.num}>
              <img src='/page/item_02@2x.png' alt='2' />
            </div>
            <div className={styles.content}>
              <h4 className={styles.itemTitle}>Creating a Portfolio</h4>
              <div className='row'>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <ul className={styles.list}>
                    <li>Think of a name for your portfolio</li>
                    <li>Choose the assets you like</li>
                  </ul>
                </div>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <span>
                    *All portfolio changes are only available before the battle
                    begins
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* item-03 */}
          <div className={styles.item}>
            <div className={styles.num}>
              <img src='/page/item_03@2x.png' alt='3' />
            </div>
            <div className={styles.content}>
              <h4 className={styles.itemTitle}>Battle Start</h4>
              <div className='row'>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <p>
                    The portfolio is fixed and the countdown to the finals
                    begins
                  </p>
                </div>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <p>
                    You can follow the progress of the battle on the website.
                    Profit amount is updated automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* item-04 */}
          <div className={styles.item}>
            <div className={styles.num}>
              <img src='/page/item_04@2x.png' alt='4' />
            </div>
            <div className={styles.content}>
              <h4 className={styles.itemTitle}>Final Battle</h4>
              <div className='row'>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <p>
                    After the end of the battle, the PNLs of all portfolios are
                    registered and the list of winners is determined.
                  </p>
                </div>
                <div className={`col-lg-6 col-md-6 ${styles.column}`}>
                  <p>
                    The amount of winnings is automatically credited to the
                    winner`s wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button
            className={styles.button}
            view='largeRed'
            label='Start the Battle'
          />
          <Button
            to='https://google.com'
            className={styles.button}
            type='link'
            view='largeBorderRed'
            label='Read More'
          />
        </div>
      </div>
    </div>
  );
};

export default BattleStages;
