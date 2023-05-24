import { Box,Stack,TextField,Typography,Button} from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import React, { useState,useEffect} from 'react';


function SearchExercise({setFilterArray,setBodypart,bodypart}) {

   let [searchitem, setSearchitem] = useState("");
 
  let[bodyParts,setBodyParts] = useState([])

//   useEffect(()=>{
// console.log(filterArray);
//   },[filterArray])
  
//We have to show that body part list once the page load , so we are use UseEffect



useEffect(() => {
  function initialRender(){
  
fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
    method: "GET",

    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setBodyParts(["all",...data]);
      //console.log(bodyParts);
    })
     .catch((err) => {
        console.log(err.message);
      })
    

  
  }
  initialRender();
}, []);  





function handelSearch()
  {
    fetch("https://exercisedb.p.rapidapi.com/exercises", {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => 
      {
       if(searchitem)
       {
 const filterData = data.filter(
   (item) =>
     item.bodyPart.includes(searchitem) ||
     item.equipment.includes(searchitem) ||
     item.name.includes(searchitem) ||
     item.target.includes(searchitem)
 );
 //console.log(filterData)
 setSearchitem("");
 setFilterArray(filterData);
       

       }

      
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }




  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "50px" } }}
        textAlign="center"
        mb="50px"
      >
        Awesome Exercise You <br></br>Should Know
      </Typography>

      <Box position="relative">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius:"4px"
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          type="text"
          placeholder="Search Exercises"
          onChange={(event)=>{setSearchitem(event.target.value)}}
          value={searchitem}
        ></TextField>
        <Button className="search-btn" sx={{
          backgroundColor:"#ff2625",
          color:"#fff",
          textTransform:"none", 
          width:{lg:"175px",xs:"80px"},
          fontSize:{lg:"20px" , xs:"14px"},
          height:"56px"
        
        }} onClick={handelSearch}>Search</Button>
      </Box>

      <Box sx={{position:"relative", width:"1005", p:"20px"}}>
        <HorizontalScrollBar data={bodyParts} bodypart={bodypart} setBodypart={setBodypart}></HorizontalScrollBar>
      </Box>
    </Stack>
  );
}

export default SearchExercise
