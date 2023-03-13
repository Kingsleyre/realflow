import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SellersCompletedHeader from '../components/SellersCompletedHeader'
import SellersCompletedTable from '../components/SellersCompletedTable'

export default function SellersCompletedPage() {
  return (
    <>
       <Header/>
      <Sidebar/>
      <SellersCompletedHeader/>
      <SellersCompletedTable/>
    </>
  )
}
