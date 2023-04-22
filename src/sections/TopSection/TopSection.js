import TimerBlock from '../../components/Timer/TimerBlock';
import Button from '../../components/Button/Button';
import styles from './topSection.module.scss';

const TopSection = () => {
  return (
    <div className={styles.topSection}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-7'>
            <div className={styles.logo}>
              <img src='/page-logo/logo.png' alt='logo' />
            </div>
            <h2>
              Symbiosis <br /> Portfolio Battle
            </h2>
            <Button
              className={styles.button}
              view='largeRed'
              label='Connect Wallet'
            />
          </div>
          <div className='col-md-5'>
            <TimerBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
