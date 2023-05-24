import React from 'react'
import { Stack,Typography } from '@mui/material';
import Icons from "../assets/icons/gym.png"
function BodyPart({item,bodypart,setBodypart}) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodypart === item ? "4px solid #ff2625" : " ",
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "190px",
        cursor: "pointer",
        gap: "47px",
      }}  
      
      onClick = {()=>{
      setBodypart(item);
      window.scroll({top:1800,left:100,behavior:"smooth"})
      }}

    >
      {item == "chest" ? (
        <img
          src={
            "https://as1.ftcdn.net/v2/jpg/02/96/52/64/1000_F_296526466_wfsPHqK8zStKdE9AKUEIFgja75SIF4i1.jpg"
          }
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : item == "cardio" ? (
        <img
          src={"https://img.icons8.com/?size=512&id=kLjjSd5b2Uvn&format=png"}
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : item == "back" ? (
        <img
          src={"https://img.icons8.com/?size=512&id=9848&format=png"}
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : item == "lower arms" ? (
        <img
          src={"https://img.icons8.com/?size=512&id=9786&format=png"}
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : item == "lower legs" ? (
        <img
          src={"https://img.icons8.com/?size=512&id=atAXhrBHLlXx&format=png"}
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : item == "neck" ? (
        <img
          src={"https://img.icons8.com/?size=512&id=20403&format=png"}
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : item == "shoulders" ? (
        <img
          src={"https://img.icons8.com/?size=512&id=9819&format=png"}
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : item == "all" ? (
        <img
          src={"https://img.freepik.com/free-vector/gym-icons-collection_1284-941.jpg?w=2000"}
          style={{ width: "60px", height: "60px" }}
        ></img>
      ) : (
        <img src={Icons} style={{ width: "40px", height: "40px" }}></img>
      )}
      <Typography
        fontSize="20px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart
