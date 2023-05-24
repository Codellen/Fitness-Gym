import React from 'react'
import { Stack,Button,Typography } from '@mui/material';

import BodyImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png"

function Details({exercisedetails}) {
   
    const{ bodyPart,gifUrl,name,target,equipment} = exercisedetails
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:"row"},p:"20px" , alignItems:"center"}}>

<img src={gifUrl} alt={name} Loading="lazy" className="detail-image"></img>
<Stack sx={{gap:{lg:"35px" ,xs:"20px"}}}>
    <Typography variant='h4'>
        {name}
    </Typography>
    <Typography>
       
    </Typography>
</Stack>
    </Stack>
    
  );
}

export default Details
