import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import img from "./images/adminlogin2.avif";
import dayjs from "dayjs";

export default function Slotbooking() {
  const fontfamily = { fontFamily: "cursive" };
  const [date, setdate] = useState(dayjs());
  const [time, settime] = useState("");

  return (
    <div>
      <Container
        style={{
          margin: "50px auto",
          padding: "50px 20px",
        }}
      >
       <h1 style={{ marginTop: "10x", fontFamily: "cursive" }}>
          Slot Allocating{" "}
        </h1>
        <Grid container spacing={3} justifyContent="center" marginTop="20px">
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: "40px" }} elevation={7}>
              <img
                src={img}
                alt="Slot Allocation img"
                style={{ width: "200px" }}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="mm/dd/yyyy"
                  value={date}
                  onChange={(newValue) => setdate(newValue)}
                ></DatePicker>
              </LocalizationProvider>
              <br></br>
              <br></br>

              <FormControl style={{ width: "70%" }}>
                <InputLabel id="demo-simple-select-label" style={fontfamily}>
                  Select Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={time}
                  onChange={(e) => settime(e.target.value)}
                  label="Select Time"
                >
                  <MenuItem style={fontfamily} value={"09.00 to 10.00"}>
                    09.00 to 10.00
                  </MenuItem>
                  <MenuItem style={fontfamily} value={"10.00 to 11.00"}>
                    10.00 to 11.00
                  </MenuItem>
                  <MenuItem style={fontfamily} value={"11.00 to 12.00"}>
                    11.00 to 12.00
                  </MenuItem>
                  <MenuItem style={fontfamily} value={"12.00 to 13.00"}>
                    12.00 to 13.00
                  </MenuItem>
                  <MenuItem style={fontfamily} value={"13.00 to 14.00"}>
                    13.00 to 14.00
                  </MenuItem>
                  <MenuItem style={fontfamily} value={"14.00 to 15.00"}>
                    14.00 to 15.00
                  </MenuItem>
                  <MenuItem style={fontfamily} value={"15.00 to 16.00"}>
                    15.00 to 16.00
                  </MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
        <Button variant="contained" onClick={() => {
          // Format the slot date to a string in 'YYYY-MM-DD' format before sending
         
          const output = { date:date.format("YYYY-MM-DD"), time };
          fetch("http://localhost:8080/slot/add-slot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(output)
          }).then(() => {
            // Handle the response from the server
            alert("Slot booking submitted successfully.");
          }).catch(error => {
            // Handle any errors
            console.error("Error submitting slot booking:", error);
            alert("Failed to submit slot booking.");
          });
        }}>Submit</Button>
        </Paper>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}