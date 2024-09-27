import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "./images/studentlogin2.avif";
import img2 from "./images/adminlogin2.avif";
import img3 from "./images/teacherlogin.avif";
import AppBar from "./Components/AdminAppbar.js";

export default function Adminpage() {
  const paperstyle = { padding: "20px" };
  const fontfamily = { fontFamily: "cursive" };

  return (
    <div>
      <AppBar />
      <Container>
        <br></br>
        <h1 style={fontfamily}>Admin's Page</h1>

        <Grid
          container
          spacing={3}
          justifyContent="left"
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={12} sm={6} md={4}>
          <Link to="/Slotbooking"  style={{textDecoration:"none"}}>
            <Paper style={paperstyle} elevation={7}>
           
                <img src={img2} alt="Slot Allocation img"style={{ width: "200px" }} className="img-hover" />
                <br></br>
              
              <p1 style={fontfamily}>Slot Allocation</p1>
            </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={paperstyle} elevation={7}>
              <Link to="/Studentslotdetail" style={{textDecoration:"none"}}>
                <img src={img1} alt="Student Booked Slot" style={{ width: "200px" }}className="img-hover"  />
              </Link>
              <br></br>
              <p1 style={fontfamily}>Student Booked Slot</p1>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Link to="/Teacherslotdetail" style={{textDecoration:"none"}}>
            <Paper style={paperstyle} elevation={7}>
              
                <img src={img3} alt="Teachers Booked Slot" style={{ width: "200px" }} className="img-hover" />
                <br></br>
              
              <p1 style={fontfamily}>Teacher Booked Slot</p1>
            </Paper>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
