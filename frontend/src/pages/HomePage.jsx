import React from 'react'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import StatCards from '../components/StatCards'
import ClientTable from '../components/ClientTable'
import Transactions from '../components/Transactions'
import Tasks from '../components/Tasks'

export default function HomePage() {
  return (
    <>
      <Home/>
      <Header />
      <Sidebar/>
      <StatCards/>
      <Tasks/>
      <Transactions/>
      <ClientTable/>
      {/* <Footer/> */}
    </>
  )
}
