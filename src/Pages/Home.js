import React, { useState } from 'react';
import { Box, Typography,Stack } from '@mui/material';

import HeroBanner from '../Component/HeroBanner';
import SearchExercise from '../Component/SearchExercise';
import Demoexercise from '../Component/Demoexercise';
function Home() {
    let[bodypart,setBodypart] = useState("all")
    let [filterArray, setFilterArray] = useState([]);
console.log(filterArray)
console.log(bodypart)
  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercise
        setFilterArray={setFilterArray}
        setBodypart={setBodypart}
        bodypart={bodypart}
      ></SearchExercise>
    
      <Demoexercise
        setFilterArray={setFilterArray}
        filterArray={filterArray}
        bodypart={bodypart}
      ></Demoexercise>
    </Box>
  );
}

export default Home