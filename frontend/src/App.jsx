import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
