import React from 'react'
import {Box} from "@mui/material";
import FirstSectionLanding from './component/first_section_landing';
import SecondSectionServices from './component/second_section_services/';
import Podcast from './component/thirdSection';
import Gallery from './component/fourthSection';
import SeventhSectionAboutUs from './component/seventh_section_about_us';
import NinthSectionContact from './component/ninth_section_cotact';
import NavBar from 'src/assets/layout/nav_bar/nav_bar';

function HomeView() {
  return (
    <main> 
      <Box component = "section" sx = {{backgroundColor:"primary.main"}}> 
        <div  className='apply-maxwidth'>
        <FirstSectionLanding />
        </div>
      </Box>
        
      <Box component = "section" sx = {{backgroundColor:"white"}}> 
        <div  className='apply-maxwidth'>
        <SecondSectionServices />
        </div>
      </Box>
      <Box component="section" sx={{ backgroundColor: "primary.main" }}>
          <div className='apply-maxwidth' >
               <Podcast />
          </div>
      </Box>
      <Box component="section" sx={{ backgroundColor: "white" }}>
         <div className='apply-maxwidth' >
              <Gallery />
          </div>
      </Box>
         
      <Box component = "section" sx = {{backgroundColor:"primary.main"}}> 
        <div  className='apply-maxwidth'>
        <SeventhSectionAboutUs />
        <NinthSectionContact/>
        {/* <NavBar/> */}
        </div>
      </Box>
        </main>
    )
}
  
  


export default HomeView;