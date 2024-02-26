import React from 'react';
import { Typography, Button, TextField } from '@mui/material';

function ContactForm() {
  return (
    <>
      <Typography
        variant='h4'
        className='responsive_fontsize20'
        sx={{ fontWeight: "bold" }}
      >
        Feel Free To Contact Us
      </Typography>
      <TextField
        id="outlined-basic-name"
        label="Name"
        variant="outlined"
        size="small"
      />
      <TextField
        type="email"
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        size="small"
      />
      <Button
        sx={{
          backgroundColor: "secondary.secondary_600",
          color: "white",
          borderRadius: "0",
          textTransform: "capitalize",
          mt: "0.5rem",
          "&:hover": {
            background: "secondary.main"
          }
        }}
      >
        Enquiry
      </Button>
    </>
  );
}

export default ContactForm;
