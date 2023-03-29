// import { Box, Image } from '@chakra-ui/react'
import React from 'react'
// import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slide.module.css";
import  Im1  from "../Home_UI_Image/m1.png";
import  Im2  from "../Home_UI_Image/m2.png";
import  Im3  from "../Home_UI_Image/m3.png";
import  Im4  from "../Home_UI_Image/m4.png";
import  Im5  from "../Home_UI_Image/m5.png";
import  Im6  from "../Home_UI_Image/m6.png";
import  Im7  from "../Home_UI_Image/m7.png";
import  Im8  from "../Home_UI_Image/m8.png";
import  Im9  from "../Home_UI_Image/m9.png";

const slideImages = [
  {
    url: Im1,
  },
  {
    url: Im2,
  },
  {
    url: Im3,
  },
  {
    url: Im4,
  },
  {
    url: Im5,
  },
  {
    url: Im6,
  },
  {
    url: Im7,
  },
  {
    url: Im8,
  },
  {
    url: Im9,
  },

];


const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Slide1 = () => {
  return (
    <div className={styles.slidecontainer}>
   
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className={styles.eachslide} key={index}>
             {/* <div key={index}> */}
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slide1;
// export const ImagesBox = ({ data = []}) => {
//   return (
//     <Box>
//     {data.map((Src,i) => (
//       <Image key={i} src={Src} />
//     ))}
//     </Box>
//   )
// }