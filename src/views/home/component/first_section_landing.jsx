import React from 'react';
import yoga from '../../../assets/images/yoga.png';
import { Box, Button, Typography,  } from '@mui/material';
import OrangeDivider from 'src/components/ui/orange_divider';
import { useSelector,useDispatch } from 'react-redux';

// import { increment,decrementByAmount,incrementByAmount, incrementByAge,decrementByAge } from 'src/redux/api/home_slice_api';


function FirstSectionLanding() {
 const dispatch = useDispatch();
  const value = useSelector((state)=> state.home?.value);

  // function handleIncrement(){
  //   dispatch(increment());
  // };
  // function handleDecrement(){
  //   dispatch(decrement());
  // }
  // function handleIncrementByAmount(){
  //   dispatch(incrementByAmount())
  // };

  // function handleDecrementByAmount(){
  //   dispatch(decrementByAmount())
  // }
  // function handleIncrementByAge(){
  //   dispatch(incrementByAge())
  // }
  // function handleDecrementByAge(){
  //   dispatch(decrementByAge())
  // }
  

  return (
    <div>
      <Box
        sx ={{
          display: "flex", 
          justifyContent: "center",
          alignItems: "center",
          // border: '2px solid black'
          flexDirection: {xs: "column-reverse", md:"row"}
          }}
        > 
         {/* <h1>My Value {value}</h1> */}
          <Box sx ={{
                    maxWidth:"40rem" ,
                    height: "100%", 
                    display: "flex", 
                    flexDirection:"column",
                    justifyContent: "center",
                    alignItems: "center", 
                    // border: "2px solid red",
                    gap:"25px"}}
                  >
                    <OrangeDivider>
                    <h1 style ={{ 
                                fontSize:"30px",
                                fontWeight:"600",
                                display:"flex",
                                color:"#480765",
                                fontFamily:"Roboto Serif"
                                }}>Inner Eye</h1>
                    </OrangeDivider>
                                <p className="responsive_fontsize20">
                                Nestled in the lap of the Himalayas in Nepal, 
                                Inner Eye is not just a retreat; it's a sanctuary for the mind,
                                body, and spirit. Our personalized packages cater to your unique needs, 
                                offering a blend of yoga, meditation, sound healing, breath work, 
                                naval treatment, psychosocial counseling, spiritual counseling,
                                and past life regression.
                                At Inner Eye, our commitment goes beyond providing a 
                                retreat experience. We empower you to integrate wellness into your everyday life. 
                                Join us on this transformative journey, 
                                and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
                                
                              </p>
                              
                              <Button 
                                varient ="container"
                                sx ={{
                                      backgroundColor:"secondary.secondary_600", 
                                      opacity:"0.8",
                                      color:"white",
                                             "&:hover":{
                                                backgroundColor:"secondary.main",
                                                opacity:"1",
                                                flexDirection:"column",
                                                }
                                               }}
                                              >
                                               About Us
                                              </Button>
                                              {/* <Button onClick={handleIncrement}style={{border:"2px solid back",color:"black"}}>Increment Me</Button>
                                              <Button onClick = {handleDecrement}style={{border:"2px solid back",color:"black"}}>Decrement Me</Button>
                                              <Button onClick={handleIncrementByAmount}style={{border:"2px solid back",color:"black"}}>Increment By Amount</Button>
                                              <Button onClick={handleDecrementByAmount}style={{border:"2px solid back",color:"black"}}>Deccrement By Amount</Button>
                                              <Button onClick={handleIncrementByAge}style={{border:"2px solid back",color:"black"}}>Increment By Age</Button>
                                              <Button onClick={handleDecrementByAge}style={{border:"2px solid back",color:"black"}}>Decrement By Age</Button> */}
                                              </Box>
                                              <div style ={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                              <img src= {yoga} alt='yoga image' style={{maxHeight:"550px"}}/>
                                             <div style={{
                                                      fontFamily: "Roboto Serif",
                                                      fontSize: "32px",
                                                      fontStyle: "italic",
                                                      fontWeight: "700",
                                                      }}>“Nestled in the lap of the Himalayas in Nepal”</div> 
                                                      </div>
                                                      </Box>
                                                      </div>
                                                      )
                                                      }

export default FirstSectionLanding;