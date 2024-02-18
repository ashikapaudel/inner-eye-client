import React from 'react';
import {Box,Typography} from "@mui/material"
import OrangeDivider from 'src/components/ui/orange_divider';
import ServiceList from './service_list'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import RegistrationFormPopup from './registration_form_popup';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SecondSectionServices() {
  const[openRegistrationDialog,setopenRegistrationDialog] = useState(false);
  const[openFreeBookDialog,setopenFreeBookDialog] = useState(false)


  return <Box >

    {/* First box */}
    <Box sx = {{backgroundColor: 'white', display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center",gap:"13.5"}}>

          <OrangeDivider>
            <Typography 
              sx={{fontSize: '13px', 
                fontFamily: "Arial", 
                color: 'secondary.secondary_600'
              }}>
              BEST SERVICES
            </Typography>   
          </OrangeDivider>
          <Typography variant='h3'
          className='responsive_fontsize32' 
          sx = {{color: 'secondary.secondary_400', 
                fontWeight: "bold",
                letterSpacing: "0.25px",
                lineHeight: "42px",
                fontFamily: "Times New Roman"
              }}>Services
          </Typography>
        </Box>
    {/* Second Box */}

    <Box >
      <ServiceList/>
    </Box>
 
    {/* Third Box */}

    <Box sx={{dispaly:"flex",justifyContent:"center", gap:"30px", padding: '1rem'}}>
    <Button variant="outlined"
     sx = {{color:"black",
     borderColor:"secondary_main",
     textTransform:"capitalize",fontWeight:"300",
     borderRadius:0,}} className='responsive_fontsize18'
     onClick={() => setopenRegistrationDialog(true)}
     >
      Registration
    </Button>
    <Button variant="outlined" sx = {{color:"black",borderColor:"secondary_main",textTransform:"capitalize",fontWeight:"300",borderRadius:0}}  className='responsive_fontsize18'
     onClick={() => setopenFreeBookDialog(true)}
     >Free Ebook</Button>
    </Box>
    {/* Registration Dialog */}
    <Dialog
        open={openRegistrationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=> setopenRegistrationDialog(false)}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <RegistrationFormPopup/>
          Registration dialog
        </DialogContent>
      </Dialog>
{/* freebook Dialog */}

      <Dialog
        open={openFreeBookDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose= {() => setopenFreeBookDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          Ebook dialog
        </DialogContent>
      </Dialog>
  </Box>
    
  
}

export default SecondSectionServices