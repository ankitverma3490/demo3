import React from 'react';
import { Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { decrNumb, incrNumb } from '../actions';

export default function Counter() {
  const myState = useSelector((state) => state.changeNUmber);
  const dispatch = useDispatch();

  return (
     
<Typography variant='contained'   bgcolor={'grey'}>
      <h1>Increment Decrement counter:</h1>
      <Typography>
        <Button variant='contained' color='success' sx={{mr:3}} onClick={() => dispatch(decrNumb(1))}>
          -1
        </Button>
        <input type='text' value={myState} readOnly />
        <Button  variant='contained' color='success'sx={{ml:3}} onClick={() => dispatch(incrNumb(2))}>
          +2
        </Button>
        </Typography>
      </Typography>
     
  );
}
