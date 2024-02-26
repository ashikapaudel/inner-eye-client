import React from 'react'
import { Box, Typography} from '@mui/material'

function FooterBar() {
  return (
   <Box sx={{
    backgroundColor:"white",
    display:"flex",
    justifyContent:"space-around",
    height:"100px",
    alignItems:"center"
   }}>
 <Typography className='responsive_fontsize16'>
    Terms and Condition
 </Typography>
 <Typography className='responsive_fontsize16'>
    Copyright @ {new Date().getFullYear()}
 </Typography>
 <Typography className='responsive_fontsize16'>
    Developed By @BM
 </Typography>
   </Box>
  )
}

export default FooterBar