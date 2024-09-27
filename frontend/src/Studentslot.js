import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Appbar from "./Components/Appbar";
import { useLocation } from "react-router-dom";
export default function BasicTextFields() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loggedInEmail = searchParams.get("email");
  const [name, setname] = React.useState("");
  const [rollno, setrollno] = React.useState("");
  const [email, setemail] = React.useState("");
  const [pid, setpid] = React.useState("");
  const [slot, setSlot] = React.useState("");
  const [show, setShow] = React.useState([]);
  const [showslot, setshowslot] = React.useState([]);
  const studentDetails = show.filter((item) => item.email === loggedInEmail);
  const fontfamily = { fontFamily: "cursive" };
  const handleChange = (event) => {
    setSlot(event.target.value);
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/slot/get-studentdetail")
      .then((res) => res.json())
      .then((result) => {
        setShow(result);
      });
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:8080/slot/get-slot")
      .then((res) => res.json())
      .then((result) => {
        setshowslot(result);
      });
  }, []);

  const handleSubmit = () => {
    // Validation: Check if all text fields are filled
    if (!name || !rollno || !email || !pid || !slot) {
      alert("Please fill in all fields");
      return;
    }

    // Check if the student has already submitted
    const hasSubmitted = show.some(
      (item) => item.email === loggedInEmail && item.slot === slot
    );
    if (hasSubmitted) {
      alert("You have already submitted a slot");
      return;
    }

    // If validation passes, proceed with submission
    const result = { name, rollno, email, pid, slot };
    fetch("http://localhost:8080/slot/add-studentslot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    }).then(() => {
      alert("Your Data is added");
      // Clear the form fields
      setname("");
      setrollno("");
      setemail("");
      setpid("");
      setSlot("");
      window.location.reload();
    });
  };

  return (
    <div>
      <Appbar studentDetails={studentDetails} />
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <h1
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "cursive",
            }}
          >
            PRESENTERS SLOT BOOKING
          </h1>

          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "50px 20px",
              maxWidth: "900px",
              margin: "5px auto",
            }}
            elevation={9}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  style={{ fontFamily: "cursive" }}
                  onChange={(e) => setname(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Roll no"
                  variant="outlined"
                  fullWidth
                  value={rollno}
                  onChange={(e) => setrollno(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Project Id"
                  variant="outlined"
                  fullWidth
                  value={pid}
                  onChange={(e) => setpid(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Available Slot
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={slot}
                    label="slot"
                    onChange={handleChange}
                  >
                    {showslot.map((showslot) => (
                      <MenuItem
                        key={showslot.date + showslot.time}
                        value={`${showslot.date} - ${showslot.time}`}
                      >
                        {showslot.date} - {showslot.time}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <br />
                <br />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                  disabled={studentDetails.length > 0}
                  style={fontfamily}
                >
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}
