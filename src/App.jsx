import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import HomeLayout from './Components/HomeLayout/HomeLayout';
import HomeImage from './Components/HomeImage/HomeImage';
// http://localhost:5173/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path='/Home' element={<HomeImage />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;

