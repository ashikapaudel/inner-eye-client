import React from 'react'
import { Card, CardMedia, Typography, CardContent } from '@mui/material'
import podcast from '../../../assets/images/podcast.png'
import ReactPlayer from 'react-player/lazy'
// Only loads the YouTube player


function PodcastCard() {
    return (
        <Card sx={{ maxWidth: 290 }}>
          
                {/* <CardMedia
                    component="img"
                    height="140"
                    image={podcast}
                    alt="green iguana"
                /> */}
                <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                <CardContent>
                    <Typography className="responsive_fontsize16" sx={{ fontWeight: "700", fontFamily: "Roboto Serif", color: "black", }} gutterBottom>
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography className="responsive_fontsize14" sx={{ fontWeight: "400", color: "black" }}>
                        Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa
                    </Typography>
                </CardContent>
            
        </Card>
    )
}

export default PodcastCard