import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './search.module.scss';

const Search = () => {
  return (
    <div className={`input ${styles.search}`}>
      <div className={styles.icon}>
        <BsSearch />
      </div>
      <input className={styles.input} type='text' placeholder='Search...' />
    </div>
  );
};

export default Search;
