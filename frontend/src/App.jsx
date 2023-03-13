import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './pages/HomePage';
import UsersActivityPage from './pages/UsersActivityPage';
import TransactionsPage from './pages/TransactionsPage';
import MyTaskPage from './pages/MyTaskPage';
import BuyerViewMorePage from './pages/BuyerViewMorePage';
import BuyersCompletedPage from './pages/BuyersCompletedPage';
import SellersCompletedPage from './pages/SellersCompletedPage';
import SellersViewMorePage from './pages/SellersViewMorePage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import MyTeamPage from './pages/MyTeamPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/usersactivity" element={<UsersActivityPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/mytask" element={<MyTaskPage />} />
      <Route path="/buyerviewmore" element={<BuyerViewMorePage />} />
      <Route path="/buyerscompleted" element={<BuyersCompletedPage />} />
      <Route path="/sellerscompleted" element={<SellersCompletedPage />} />
      <Route path="/sellerviewmore" element={<SellersViewMorePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/myteam" element={<MyTeamPage />} />
    </Routes>
  );
}

export default App;
