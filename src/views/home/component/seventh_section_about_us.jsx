
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Aboutus from 'src/assets/images/Aboutus.png';
import OrangeDivider from 'src/components/ui/orange_divider';

function SeventhSectionAboutUs() {
  return (
        <Box
            sx= {{
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
                xs: "column",
                sm: "row"},
            }}
        >
                {/* left_container  image */}
            <Box
                sx={{
                    maxWidth:{xs: "100%", sm: "50%"},
                    width: "100%"
                }}
                >
                    <img src={Aboutus} alt="About Us Image" />
                </Box>
                

                {/* right_container for text*/}
            <Box
                sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: {xs: "100%", sm: "50%"},
                    width: "100%",
                    }}>
                <Box
                    sx = {{
                        display: 'flex',
                        flexDirection: 'column',
                        py: "1.5rem",
                        gap: "1.5rem",
                    }}
                >
                        <Box>
                            <OrangeDivider>
                            <Typography
                            className='responsive_fontsize32'
                                sx={{
                                letterSpacing: "3px",
                                color: "secondary.main",
                                lineHeight: "18px",
                                fontWeight: "bold",
                                fontFamily: "Times New Roman",
                                }}
                            >
                                About Us
                            </Typography>
                            </OrangeDivider>
                        </Box>

                        <Box>
                            <Typography
                            className='responsive_fontsize26'
                                sx= {{
                                    fontFamily: "Times New Roman",
                                    fontWeight: "bold",

                                }}
                            >
                                Mr. Swopna Sum
                            </Typography>
                            <Typography
                            className='responsive_fontsize26'
                                sx= {{
                                    fontFamily: "Times New Roman",
                                    fontWeight: "bold"

                                }}
                            >
                                Founder & CEO
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                            className='responsive_fontsize16'
                                sx= {{  
                                    textAlign: "justify"
                                }}
                            >
                            Dedicated to the art of holistic healing, 
                            Ms. Swapna Sum stands at the helm of Inner Eye as both a visionary leader 
                            and a compassionate healer. Certified as a meditation facilitator, yoga trainer,
                            therapist, psycho-social counselor, hypnotherapist, and a certified Tibetan/Vedic 
                            sound healing therapist, Ms. Swapna's journey into holistic wellness is deeply personal.
                            As a survivor of trauma, depression, and anxiety, 
                            Ms. Swapna found solace and transformation through holistic healing practices. 
                            Fueled by her own experiences, she embarked on a path of rigorous research, 
                            continuous learning, and professional development. 
                            Today, she seamlessly blends her expertise to offer seekers a comprehensive 
                            approach to wellness. .......
                            </Typography>
                        </Box>
                </Box>

                <Button
                            variant="outlined"
                            sx = {{
                                borderRadius: "0px",
                                color: "black",
                                borderColor: "secondary.main",
                                border: "2px",
                                "&:hover": {
                                    borderColor: "secondary.secondary_600",
                                },
                                maxWidth: "10rem"
                            }}
                        >
                            Read More
                        </Button>

                </Box>
    </Box>
  )
}

export default SeventhSectionAboutUs