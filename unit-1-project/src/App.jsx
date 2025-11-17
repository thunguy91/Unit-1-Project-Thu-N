import { useState } from 'react'
import { Outlet, useLocation, Link, Routes, Route } from 'react-router';
import './App.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ExplorePage from './components/pages/ExplorePage';
import SignUp from './components/pages/SignUpPage';
import Home from './components/pages/Home';
import AboutPage from './components/pages/AboutPage.jsx'
import './index.css'
import LogIn from './components/pages/LogInPage';
import ContactPage from './components/pages/ContactPage.jsx';

function App() {
  const hideHeaderOn = ['/signup', '/login'];
  const shouldHideHeader = hideHeaderOn.includes(location.pathname);


  return (
      <div>
        <Header/>
        {/* <LogIn/> */}
        {/* <SignUp/> */}
        {/* <Home/> */}
        {/* <ExplorePage/> */}


        <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/explore" element={<ExplorePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>

        </Routes>
        <Footer/>
      </div>


      
  )
}

export default App;
