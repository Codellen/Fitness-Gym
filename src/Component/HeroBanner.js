import { Box,Typography,Button } from '@mui/material';
import "../App.css"
import HeroBannerLogo from "../assets/images/banner.png"
import React from 'react'

function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      p="20px"
      position="relative"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb={4}>
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={2}
      >
        Sweat,Smile <br></br> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check Out the most effective exercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        size="large"
        href="/exercise/:id"
        sx={{marginBottom:"20px"}}
      >
        Explore Exercises
      </Button>
      <Typography fontWeight={600}
      color="#ff2625" sx={{
        opacity:0.1, display:{lg:"block",xs:"none"}
      }}  fontSize={200} >Exercise</Typography>
      <img src={HeroBannerLogo} className="hero-banner-img"></img>
    </Box>
  );
  
 
}

export default HeroBanner
