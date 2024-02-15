import React from 'react'
import Divider from "@mui/material/Divider";

import {Box} from "@mui/material";

function OrangeDivider({children}) {
  return (
  <Box sx={{display:"flex",alignItems:"center",gap:"12px"}}>
    <Box sx={{height:"1px",width:"50px",backgroundColor:"accent.main"}}>
          
        </Box>
      
        {children}
        <Box sx={{height:"1px", width:"50px",
        backgroundColor:"accent.main"}}>
        </Box>
  </Box>
  )
}

export default OrangeDivider;