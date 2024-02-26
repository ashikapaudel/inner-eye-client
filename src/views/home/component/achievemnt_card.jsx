import React from 'react'
import { Box, Typography } from '@mui/material'

function AchievementCard({tittle,total}) {
  return (
   <Box sx={{
    maxWidth:"145px",
    width:"100%",
    background:"#fff",
    height:"170px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    boxShadow: "1px 4px 4px 0px #00000040",
    
}}>
        <Box>
            <Typography className="responsive_fontsize20"
            sx={{fontWeight:"600",letterSpacing:"3px", textTransform:"capitalize"}}>
                {total}+
            </Typography>
            <Typography className='responsive_fontsize20' 
            sx={{fontWeight:"600",letterSpacing:"3px",textTransform:"capitalize"}}>
                {tittle}
                </Typography>
        </Box>

   </Box>
  )
}

export default AchievementCard