import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Table from '../components/Table'
import UserTransaction from '../components/UserTransaction'

export default function HomePage() {
  return (
    <>
      <Nav/>
      <Header/>
      <Table/>
      <UserTransaction/>
      <Footer/>
    </>
  )
}
