import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
//Icon import
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
//assets import
import logo from "../../logo/logo.png"

const navItems = [
  "Home",
  "About",
  "Services",
  "Podcast",
  "Gallery",
  "Blogs",
  "Events",
  "Contact Us",
];

function NavBar() {
  
  
  const [isMobileDrawerOpen,setMobileDrawerOpen] = useState(false)
  
  function toggleMobileDrawer(){
      setMobileDrawerOpen(!isMobileDrawerOpen);
  }
   const renderLogo = (
    <img src = {logo} alt= "Inner Eye" style={{width:"100%",height:"100%"}}/>
   );

   const renderItems= (
    <>
    {navItems?.map((item,index)=>(
      <Typography key = {index}>{item}</Typography>
    ))}
    </>
   );
  return(
    <AppBar position="static" sx={{px:"2rem",py:"0.5rem",backgroundColor:"#ffffff"}}>
        <Toolbar disableGutters  className="apply--maxwidth" sx={{width:"100%",py:"0"}}>
          {/*Start MOBILE VIEW */}

          <Box 
          sx={{
            display:{xs: "flex", md:"none"},
            justifyContent:"space-between",
            alignItems:"center",
            width:"100%"
        }}
        >
         <Box>
          {renderLogo}
          </Box>

          <Box 
          sx={{display: { xs: "flex", md: "none" },}}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick = {toggleMobileDrawer}
            >
              <MenuIcon />
            </IconButton>
           
           </Box>
          </Box>
         
          {/* END MOBILE VIEW */}

          {/* START DESKTOP VIEW */}
          <Box 
          sx={{
            // display:"flex",
            justifyContent:"space-between",
            width:"100%",
            alignItems:"center",
            display: {xs: "none", md:"flex"}
            }}
            >
          <Box sx = {{display:{xs: "none", md:"flex"}
        }}>
            <Box>{renderLogo}</Box>
          </Box>


          <Box
            sx={{
             display:"flex",
             gap:"30px"
            }}
          >
           {renderItems}
          </Box>
          
          <Box>
           
          </Box>
          
          
          <Box sx={{
        display: 'flex',
        alignItems: 'center',
       
      }}
      >
          <Divider 
          orientation="vertical" 
          variant="middle"
          flexItem 
          sx={{
            borderLeftWidth:1.5,
            borderBlockColor:"#232323",
            height: "25px",
          }}
          />
          <Box sx ={{px:"0.5rem", display:"flex"}}>
            <FacebookIcon sx={{color:"blue"}}/>
            <PinterestIcon sx={{color:"red"}}/>
            <LinkedInIcon sx={{color:"#78A1DE"}}/>
            <InstagramIcon sx={{}}/>
            <YouTubeIcon sx={{color:"#FA0505"}}/>
            </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          </Box>
          </Box>
          
          {/* END DESKTOP VIEW */}
        </Toolbar>
        <Drawer
            anchor="top"
            open={isMobileDrawerOpen}
            onClose={()=> setMobileDrawerOpen(false)}
          >
           
            {renderItems}
          </Drawer>
     
    </AppBar>
  );
}
export default NavBar;
