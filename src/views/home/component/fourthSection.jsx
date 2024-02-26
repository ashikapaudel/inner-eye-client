import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import OrangeDivider from 'src/components/ui/orange_divider';
import GalleryList from './galleryList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGalleryList } from 'src/redux/api/home_slice_api';

function FourthSectionGallery(){
  const dispatch = useDispatch();
  const isGalleryListLoading = useSelector(
  (state)=> state.home.isGalleryListLoading
);
const galleryList =useSelector((state)=>state.home.galleryList)
  useEffect(()=>{ 
    dispatch(fetchGalleryList())
  }, [dispatch])

    return(<>
        
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "13.5px", marginTop: "13.5px" }} >
      <OrangeDivider >
        <Typography sx={{ fontSize: "13px", letterSpacing: "4px", color: "secondary.secondary_600", fontFamily: "Arial" }} >We capture some Glimpse of you</Typography>
      </OrangeDivider>
      <Typography variant='h3' className='responsive_fontsize32' sx={{ color: "secondary.secondary_400", fontWeight: "bold", letterSpacing: "0.25px", lineHeight: "42px", marginBottom: "11px", fontFamily: "times new roman" }}>Gallery</Typography>
    </Box>

    <Box sx={{ pt: "47px", pb: "27px" }}>
      <GalleryList galleryList={galleryList} />
    </Box>
    </>
    )
}
export default FourthSectionGallery;