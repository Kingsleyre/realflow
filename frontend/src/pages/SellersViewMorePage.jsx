import React from 'react'
import Header from '../components/Header'
import SellersActiveTable from '../components/SellersActiveTable'
import SellersViewHeader from '../components/SellersViewHeader'
import Sidebar from '../components/Sidebar'

export default function SellersViewMorePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <SellersViewHeader/>
      <SellersActiveTable/>
    </>
  )
}
