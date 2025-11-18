// import { useState } from 'react'
import { useLocation, Link, Routes, Route } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ExplorePage from './components/pages/ExplorePage';
import SignUp from './components/pages/SignUpPage';
import Home from './components/pages/Home';
import AboutPage from './components/pages/AboutPage.jsx'
import LogIn from './components/pages/LogInPage';
import ContactPage from './components/pages/ContactPage.jsx';
import './App.css';
import './index.css';


function App() {
  const location = useLocation();
  const hideHeaderOn = ['/signup', '/'];
  const shouldHideHeader = hideHeaderOn.includes(location.pathname);


  return (
      <div>
        {!shouldHideHeader && <Header />}

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
