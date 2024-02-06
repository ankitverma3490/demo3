  import React from 'react';
  import Navbar from './components/Navbar';
  import RecipeReviewCard from './components/RecipeReviewCard';
  import Buttons from './components/Buttons';
  import { Grid, Typography } from '@mui/material';

  import Texxt from './components/Texxt';
// import NewCard from './NewCard';
import Numbers from './components/Numbers';

const cardData = [
   {
    id:"1",
    hotel:"Taj",
    location:"Delhi",
    image:"https://source.unsplash.com/random",
   },
   {
    id:"2",
    hotel:"Raj",
    location:"New Delhi",
    image:"https://source.unsplash.com/random",
   },
   {
    id:"3",
    hotel:"Marriot",
    location:"Indore",
    image:"https://source.unsplash.com/random",
   },
   {
    id:"4",
    hotel:"palace",
    location:"Bhopal",
    image:"https://unsplash.com/photos/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0",
   },   

];
  function App() {
  return (
     
    
    <>
    
     <Typography variant='h3'   ml={100}>Todays work</Typography>
    <Navbar> </ Navbar>
       <Numbers/>
     <Texxt></Texxt>
     <Grid textAlign={'center'} container spacing={4}>
     { cardData.map((data)=>(
          <Grid item xs={6}>
            <RecipeReviewCard 
          key={data.id}
          hotel={data.hotel}
          location={data.location}
          image = {data.image}

          />
          </Grid>
      )
      )
      }
      {/* <RecipeReviewCard/> */}
     </Grid>
     <Buttons></Buttons>
     {/* <NewCard></NewCard> */}
     </>
     
  );
}

export default App;
