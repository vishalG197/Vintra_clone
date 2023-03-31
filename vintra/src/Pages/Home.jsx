import React from "react"
import { useNavigate  } from "react-router-dom"
import { Box,Image ,Heading} from '@chakra-ui/react'
import Slide1 from './HomeComponent/Slide'
import Img11 from "./Home_UI_Image/img1.png"
import Img21 from "./Home_UI_Image/img2.png"
import Img31 from "./Home_UI_Image/img3.png"
import Img41 from "./Home_UI_Image/img4.png"
import Img51 from "./Home_UI_Image/img5.png"
import Img61 from "./Home_UI_Image/img6.png"
import Img71 from "./Home_UI_Image/img7.png"


export default function Home (){
const navigation=useNavigate()
   return( <Box m="auto"  >
   <Slide1/>
   {/* <Box boxSize='2XL' mt='10' mb='10'>
  <Image src='https://myntra-black.vercel.app/static/media/s1.46660100500264d07b32.gif' alt='' m="auto"  />
    </Box> */}
<Box onClick={()=>navigation("/products")} m="auto">
    <Heading as='h3' size='lg' >
     DEAL OF THE DAY
  </Heading>
    <Box boxSize='2XL' m="auto" mt='10' mb='10'>
<Image src={Img11} alt='' m="auto" />
    </Box>
    <Heading as='h3' size='lg'>
     BEST OF MYNTRA EXCLUSIVE BRANDS

  </Heading>
    <Box boxSize='2XL' mt='10' mb='10'>
  <Image src={Img21}  alt='' m="auto" />
    </Box>
    <Heading as='h3' size='lg' m="auto" >
     TOP PICKS
  </Heading>
    <Box boxSize='2XL' mt='10' mb='10'>
  <Image src={Img31}  alt='' m="auto" />
    </Box>
    <Heading as='h3' size='lg'>
     CATEGORIES TO BAG

  </Heading>
    <Box boxSize='2XL'mt='10' mb='10' m="auto" >
  <Image src={Img41}  alt='' m="auto" />
    </Box>
    <Heading as='h3' size='lg' mb='10' m="auto" >
     DEALS ON TOP BRANDS
  </Heading>
    <Box boxSize='2XL' mt='10' mb='10'm="auto" >
  <Image src={Img51}  alt='' m="auto" />
    </Box>
    <Heading as='h3' size='lg' mb='10' >
    BRANDS AT SLASHED PRICES
  </Heading>
    <Box boxSize='2XL' mt='10' mb='10' m="auto" >
  <Image src={Img61}  alt='' m="auto" />
    </Box>
    <Heading as='h3' size='lg'>
     BEST BUYS
  </Heading>
    <Box boxSize='2XL' mt='10' mb='10' m="auto" >
  <Image src={Img71}  alt='' m="auto" />
    </Box>
    </Box>
   </Box>)
}