import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from "../assets/images/Logo.png"
function Navbar() {
  return (
  <Stack direction="row" justifyContent="none" alignItems="center" gap="40px" marginTop="20px" px="20px"
  >
    <Link to="/">
    <img src={Logo} alt='logo' style={{width:"48px",height:"48px",margin:"0 20px"}} ></img>
    </Link >
    <Stack direction="row" gap="60px" alignItems="flex-end" fontSize="24px" >
        <Link to="/" style={{textDecoration:"none",color:"#3A1212",borderBottom:"3px solid #FF2625"}}>
       Home
        </Link>
       
        <a href='/exercise/id' style={{textDecoration:"none",color:"#3A1212"}}>Exercise</a>
        
    </Stack>
    
  </Stack>
  )
}

export default Navbar