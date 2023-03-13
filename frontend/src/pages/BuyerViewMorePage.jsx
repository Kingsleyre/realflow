import React from 'react';
import BuyersActiveTable from '../components/BuyersActiveTable';
import BuyersViewHeader from '../components/BuyersViewHeader';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


export default function BuyerViewMorePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <BuyersViewHeader />
      <BuyersActiveTable/>
    </>
  );
}
