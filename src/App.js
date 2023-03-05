import { styled } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
// import ProtectedRoute from './components/ProtectedRoute';
// import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import Carousel from './components/Banner/Carousel';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in using local storage
    const userLoggedIn = localStorage.getItem('loggedIn');
    if (userLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  //styling starts here

  const CustomApp = styled('div')(({ theme }) => ({
    backgroundColor: "#031B34",
    color: "white",
    minHeight: "100vh",
  }))

  //styling ends here
  
  return (
    <BrowserRouter>
      <CustomApp>
        <Header />

        {/* //your private and public routes goes here */}


        <PublicRoute path='/login' component={LoginPage} /> 
        <PublicRoute path='/register' component={Register} />
        <PublicRoute path="/home" component={Homepage} />

        <PublicRoute path='/coins/:id' component={CoinPage} />
  
        </CustomApp>
    </BrowserRouter>
  );
}

export default App;
