import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Buttons() {
  return (
       
    <ButtonGroup variant="contained" aria-label="outlined primary button group" mx={5}>
      <Button>Previous</Button>
      {/* <Button></Button> */}
        <Button >  Next  </Button>
      
    </ButtonGroup>
  );
}

