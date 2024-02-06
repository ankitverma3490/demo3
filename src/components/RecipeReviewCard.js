 import React,{useState} from 'react'
 import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
//  import Popper from '@mui/material/Popper';
import Collapse from '@mui/material/Collapse';
 
 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material';
 
 
 export default function RecipeReviewCard({hotel,location,image }) {

  const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
   return (
     <div>
      <Card sx={{maxWidth:300}}>
        <CardMedia
        component="img"
        height="240"
        maxWidth="240"
        image={image}
        // image = "https://unsplash.com/photos/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0"
        alt='Loading'
        /> 
        <CardContent>
          <Typography>
            {hotel}
          </Typography>
          <Typography variant='h4'>
            {location}
          </Typography>
          
        </CardContent>
        <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >  
                   <ExpandMoreIcon />
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {/* {id} */}
                        decr
                    </Typography>
                </CardContent>
            </Collapse>
      </Card>
     </div>
   )
 }
 
   
