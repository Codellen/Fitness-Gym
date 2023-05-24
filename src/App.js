import React from 'react'
//import { Box } from '@mui/material';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Exercise from './Pages/Exercise';
import Footer from './Component/Footer';
import "./App.css";
import { Box } from '@mui/material';
function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/exercise/:id' element={<Exercise></Exercise>}></Route>
      </Routes>
      <Footer></Footer>
    </Box>
  )
}

export default App
