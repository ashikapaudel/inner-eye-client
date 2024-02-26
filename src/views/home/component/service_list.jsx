// import React from 'react';
// import ServiceCard from './service_card'
// import Slider from "react-slick";
// import Box from '@mui/material/Box';

// function ServiceList( {serviceList}) {
//     const settings = {
//         className: "center",
//         arrows:false,
//         centerMode: false,
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//       };
//       console.log("service list", serviceList);
//   return (
//     <div className='center__carousel'>
//         <Slider {...settings}>
//             {serviceList?.map((item) => (
//               <ServiceCard key ={item?._id} item={item}/>  
//               ))}
        
//         </Slider>
//    </div>
 
//   )
// }

// export default ServiceList;

import React from 'react';
import ServiceCard from './service_card';
import Slider from "react-slick";
import Box from '@mui/material/Box';

function ServiceList({ serviceList }) {
  const settings = {
    className: "center",
    arrows: false,
    centerMode: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  console.log("service list", serviceList);

  return (
    <Box className='center__carousel'> {/* Changed 'div' to 'Box' */}
      <Slider {...settings}>
        {serviceList?.map((item) => (
          <ServiceCard key={item?._id} item={item} />
        ))}
      </Slider>
    </Box>
  );
}

export default ServiceList;
