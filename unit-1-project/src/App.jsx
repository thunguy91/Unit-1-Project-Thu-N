import { useState } from 'react'
import { Routes, Route } from 'react-router';
import './App.css'
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
      <div>
        <Header />
        <Main />
        <Footer/>
      </div>

      
  )
}

export default App;
