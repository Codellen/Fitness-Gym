import React,{useState,useEffect} from 'react'
import { Pagination } from '@mui/material';
import {Box,Stack,Typography} from '@mui/material';
import ExerciseCard from './ExerciseCard';


  const Demoexercise = ({ setFilterArray, filterArray, bodypart }) => {
    
    console.log(filterArray)
    let[currentPage,setCurrentPage] = useState(1)
     const exercisesPerPage = 9;
     const indexofLastExercise = currentPage*exercisesPerPage;
     const indexofFirstExercise = indexofLastExercise-exercisesPerPage;

     const currentExercise = filterArray.slice (indexofFirstExercise,indexofLastExercise)

const paginate = (e,value)=>{
       setCurrentPage(value)
      
       
       window.scrollTo({top:1750 ,behavior:"smooth" })
}


useEffect(()=>{

  if(bodypart=="all")
  {
    fetch("https://exercisedb.p.rapidapi.com/exercises", {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilterArray(data);
      });
  }

  else{
    fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilterArray(data);
      });
  }

},[bodypart])



    return (
      <Box
        id="exercises"
        sx={{
          mt: { lg: "110px" },
        }}
        mt="50px"
        p="20px"
      >
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercise.map((item, index) => (
            <ExerciseCard key={index} item={item}></ExerciseCard>
          ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
          {filterArray.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(filterArray.length / exercisesPerPage)}
              page={currentPage}
              onChange={ paginate}
              size="large"
            ></Pagination>
          )}
        </Stack>
      </Box>
    );
  };                                                       



export default Demoexercise
