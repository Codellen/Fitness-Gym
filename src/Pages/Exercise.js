import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box, useStepContext } from '@mui/material';
import Details from '../Component/Details';
import VideoExercises from '../Component/VideoExercises';
import SimilarExercises from '../Component/SimilarExercises';

function Exercise() {
  let[exercisedetails,setExerciseDetails] = useState({})
let {id} = useParams();



useEffect(()=>{

  fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,{
    method: "GET",

    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    }
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    setExerciseDetails(data)
  }).catch((err)=>{
    console.log(err.message)
  })

},[id])

  return (
    <div>
      <Details exercisedetails={exercisedetails}></Details>
      <VideoExercises></VideoExercises>
      <SimilarExercises></SimilarExercises>
    </div>
  )
}

export default Exercise