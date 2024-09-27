import React from 'react'
import {Container,Grid,Typography,Button, Paper} from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


export default function Test() {


  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <div>
      <Container>
        <Paper elevation={4} style={{padding:"20px", marginTop:"20px"}}>
          <h3 style={{fontFamily:"cursive"}}>Students Submission </h3>
      <Grid container spacing={3} justifyContent="center" marginTop="20px">
        <Grid item xs={12} sm={6} md={12}>

      <Card sx={{ minWidth: 350 }} elevation={3}  >
    <CardContent style={{textAlign:"left"}} >
      <Typography>Leader Name: Muhammed Arsath CN</Typography><hr></hr>
      <Typography>Member 2 Name: Muhammed Arsath CN </Typography><hr></hr>
      <Typography>Member 3  Name: </Typography><hr></hr>
      <Typography>Leader Department: </Typography><hr></hr>
      <Typography>Member 1 Department: </Typography><hr></hr>
      <Typography>Member 2 Department:  </Typography><hr></hr>
      <Typography>Project Title: </Typography><hr></hr>
      <Typography>Guide Name: </Typography><hr></hr>
      <Button variant="contained">Contained</Button>
    </CardContent>

      </Card>
    </Grid>

      </Grid>
      </Paper>
      </Container>
    
    </div>
  )
}
