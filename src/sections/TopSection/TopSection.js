import TimerBlock from '../../components/Timer/TimerBlock';
import Button from '../../components/Button/Button';
import styles from './topSection.module.scss';

const TopSection = () => {
  return (
    <div className={styles.topSection}>
      <div className='container-fluid'>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src='/page/logo@2x.png' alt='logo' />
            </div>
            <h2>
              Symbiosis <br /> Portfolio Battle
            </h2>
            <Button
              className={styles.button}
              view='largeRed'
              label='Connect Wallet'
            />
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.itemImg}>
                  <img src='/page/prize_fund_item@2x.png' alt='prize fund' />
                </div>
                <p className={styles.itemValue}>$ 2000</p>
                <span className={styles.itemDesc}>Prize fund</span>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImg}>
                  <img
                    src='/page/raytaians_item@2x.png'
                    alt='number of raytaians'
                  />
                </div>
                <p className={styles.itemValue}>1053</p>
                <span className={styles.itemDesc}>Number of raytaians</span>
              </div>

              {true && (
                <div className={styles.item}>
                  <div className={styles.itemImg}>
                    <img
                      src='/page/raytaians_with_nft_item@2x.png'
                      alt='raytaians with nft'
                    />
                  </div>
                  <p className={styles.itemValue}>593</p>
                  <span className={styles.itemDesc}>Raytaians with NFT</span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <TimerBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
