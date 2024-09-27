import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button, Grid } from "@mui/material";
import img from "./images/studentlogin2.avif";

import { useNavigate } from "react-router-dom";

export default function BasicTextFields() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fontfamily = {fontFamily:"cursive"};

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the backend for authentication
    fetch("http://localhost:8080/slot/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the authentication response
        if (data.success) {
          navigate(`/studentslot?email=${email}`);
         
        } else {
            alert("Login Unsucessfull")
        
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }; 
 



  const paperstyle = {
    padding: "50px 20px",
    margin: "20px auto",
  };

  // Exporting the email value


  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={10} style={paperstyle}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <img src={img} alt="logo" width="100%" height="auto" />
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 style={fontfamily}>Student Sign In</h1>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <br />
            <br />
            <Button variant="contained" fullwidth onClick={handleSubmit} style={fontfamily}>
              Login
            </Button>
         
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

// Exporting the getLoggedInEmail function separately
export const getLoggedInEmail = BasicTextFields.getLoggedInEmail;
