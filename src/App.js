import React from 'react';
import "./styles/myStyle.css";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbars/Navbar';
import { AuthContext } from './context';
import { useState } from 'react';

function App() {
  const [isAuth,setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
 <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
   
  )
}

export default App;
