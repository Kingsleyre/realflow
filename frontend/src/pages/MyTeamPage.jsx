import React from 'react'
import BarChart from '../components/BarChart'
import Header from '../components/Header'
import MyTeam from '../components/MyTeam'
import MyTeamHeader from '../components/MyTeamHeader'
import MyTeamProgressCard from '../components/MyTeamProgressCard'
import MyTeamTable from '../components/MyTeamTable'
import MyTeamTableHeader from '../components/MyTeamTableHeader'
import Sidebar from '../components/Sidebar'

export default function MyTeamPage() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <MyTeamHeader/>
      <MyTeamProgressCard/>
      <MyTeamTableHeader/>
      <MyTeamTable/>
      {/* <MyTeam/> */}
      <BarChart/>
    </>
  )
}
