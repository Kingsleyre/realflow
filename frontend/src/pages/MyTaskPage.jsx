import React from 'react';
import CreateTask from '../components/CreateTask';
import Header from '../components/Header';
import MyTask from '../components/MyTask';
import Sidebar from '../components/Sidebar';
import AssignedTaskTable from '../components/AssignedTaskTable';

export default function MyTaskPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <MyTask />
      <CreateTask />
      <AssignedTaskTable/>
    </>
  );
}
