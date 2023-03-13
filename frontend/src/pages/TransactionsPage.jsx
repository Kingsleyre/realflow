import React from 'react'
import BuyersTransactions from '../components/BuyersTransactions'
import Header from '../components/Header'
import SellersTransaction from '../components/SellersTransaction'
import Sidebar from '../components/Sidebar'
import TrasactionHeader from '../components/TrasactionHeader'

export default function TransactionsPage() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <TrasactionHeader/>
      <BuyersTransactions/>
      <SellersTransaction/>
    </>
  )
}
