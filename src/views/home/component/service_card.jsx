import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ServiceCard() {
  return (
    // <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card sx={{ maxWidth: 275 ,
     backgroundColor:"secondary.main",
     height:"280px" }}>
      <CardContent>
        <Typography sx={{ fontWeight:"600" }} 
        className='responsive_fontsize18'>
          Sound Healing
        </Typography>
       
        <Typography sx={{ fontWeight:"14px",color:"white"}}
         className='responsive_fontsize14'>
        Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  


 

  );
    }



export default ServiceCard;