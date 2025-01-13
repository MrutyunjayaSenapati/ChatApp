import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
    <h1>Chat app</h1>
  <Routes>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/settings" element={<SettingPage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>

  </Routes>

    </>
  )
}

export default App