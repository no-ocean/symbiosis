export const coinsLimiter = (styles, coins, limit) => {
  if (coins.length > limit) {
    let rest = coins.length - limit;

    const forRender = coins.slice(0, limit).map((item, index) => {
      const { title, icon } = item;
      return (
        <div key={title + index} className={styles.coin}>
          <img src={icon} alt={title} />
        </div>
      );
    });

    return (
      <>
        {forRender}
        <div key='rest' className={styles.limiter}>
          +{rest}
        </div>
      </>
    );
  } else {
    return coins.map((item, index) => {
      const { title, icon } = item;
      return (
        <div key={title + index} className={styles.coin}>
          <img src={icon} alt={title} />
        </div>
      );
    });
  }
};
