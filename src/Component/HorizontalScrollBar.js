import React,{useContext} from 'react'
import { Box,Typography,Button } from '@mui/material'
import BodyPart from './BodyPart';
// import {
//   ScrollMenu,
//   VisibilityContext,
  
// } from "react-horizontal-scrolling-menu";
 import Scrollbars from 'react-custom-scrollbars';
// import RightArrowIcon from "../assets/icons/right-arrow.png";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";
// //import "react-horizontal-scrolling-menu/dist/styles.css";
// const LeftArrow = () => {
//   //const { scrollPrev } = useContext(VisibilityContext);
//   console.log("heeyy");
//   function scrollPrev()
//   {
// const left = document.querySelector(".right-arrow");
// left.scrollBy(200, 0);
// console.log("Clicked");

//   }

//   return (
//     <Button onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Button>
//   );
// };

// const RightArrow = () => {
//   //const { scrollNext } = useContext(VisibilityContext);
//   function scrollNext()
//   {
// const right = document.querySelector(".left-arrow");
// right.scrollBy(-200, 0);
//   }
  

//   return (
//     <Button onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Button>
//   );
// };
const HorizontalScrollBar = ({data,bodypart,setBodypart})=>{
    
    return (
      // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <Scrollbars style={{ width: 1500, height: 300 }}>
      <div  style={{display:"flex",position:"static"}}>
        {data.map((item) => (
          <div>
            <Box
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              m="40px 40px"
            >
              <BodyPart
                item={item}
                bodypart={bodypart}
                setBodypart={setBodypart}
              ></BodyPart>
              
            </Box>
          </div>
        ))}
      </div>
      </Scrollbars>
      //  </ScrollMenu>
    ); 
}

export default HorizontalScrollBar
