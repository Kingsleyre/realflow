import React from 'react'
import BuyersCompletedHeader from '../components/BuyersCompletedHeader'
import BuyersCompletedTable from '../components/BuyersCompletedTable'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function BuyersCompletedPage() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <BuyersCompletedHeader/>
      <BuyersCompletedTable/>
    </>
  )
}
