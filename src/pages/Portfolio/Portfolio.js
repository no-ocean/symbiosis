import React from 'react';
import BackLink from '../../components/BackLink';
import CoinsList from '../../components/CoinsList/CoinsList';
import DescWithEdit from '../../components/DescWithEdit/DescWithEdit';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profit from '../../components/Profit/Profit';
import Search from '../../components/Search/Search';
import SidebarBalance from '../../components/SidebarBalance';

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <div className='container-fluid'>
          <div className='row rowWithLink'>
            <div className='col-md-12'>
              <BackLink to='/' />
            </div>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-5 col-xl-4'>
              <Profit />
              <DescWithEdit editable={true} />
              <SidebarBalance />
            </div>
            <div className='col-lg-7 col-xl-8'>
              <Search />
              <CoinsList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
