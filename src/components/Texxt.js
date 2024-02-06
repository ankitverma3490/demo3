import React from 'react'
import { Button, MenuList, TextField } from '@mui/material'
import {Typography} from '@mui/material'
export default function  Texxt() {
  return (
    <> 
    <Typography  display={'block'} justifyContent={'center'} mx={100}>
    <Typography variant='h3'>
        Book your Trip
    </Typography>
    <Typography  my={2}>
    <TextField 
    label="Enter your  name"
    color = "info"
    variant="outlined"
     focused
     
    />
    </Typography>
      <Typography my={2}>
      <TextField 
    label="Enter your number "
    color = "info"
    variant="outlined"
    type='number'
     focused
     
     
    />
      </Typography>
     
   <Typography  my={2}>
     <TextField 
    label="Enter your  password"
    color = "info"
    variant="outlined"
    type='password'
     focused
     
    />
    </Typography>
    <Button variant='contained'>Login</Button>
    </Typography>
    </>
  )
}