import React from 'react'
import Header from '../components/Header'
import Notifications from '../components/Notifications'
import NotificationsHeader from '../components/NotificationsHeader'
import Sidebar from '../components/Sidebar'

export default function NotificationsPage() {
  return (
    <>
      <Header/>
      <Sidebar/>
      {/* <NotificationsHeader/> */}
      <Notifications/>
    </>
  )
}
