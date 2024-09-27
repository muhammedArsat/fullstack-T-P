import React from 'react'
import { Box, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
export default function () {
  return (
   <Box style={{padding:"20px"}}>

    <Typography variant='h5' style={{padding:"2opx"}} >
      Book The Slot
    </Typography>
    <br></br>
    <LocalizationProvider dateAdapter={AdapterDayjs}>

     <DatePicker label="mm/dd/yyyy">

     </DatePicker>
    </LocalizationProvider>
   </Box>
  );
}
