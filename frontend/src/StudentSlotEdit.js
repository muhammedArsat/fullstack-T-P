import {
  Typography,
  Container,
  Grid,
  Card,
  Button,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function StudentSlotEdit() {
  const [name,setname]=React.useState("");
  const [rollno,setrollno]=React.useState("");
  const [slot, setslot] = React.useState("");
const [pid,setpid] = React.useState("");
const[Email,setEmail] = React.useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { email } = useParams();
  const [showslot, setshowslot] = React.useState([]);
  const handleChange = (event) => {
    setslot(event.target.value);
  };
  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const output = { slot,pid,name,rollno};
      const response = await fetch(
        `http://localhost:8080/slot/studentupdate/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(output),
        }
      );
      if (response.ok) {
        navigate(`/studentslot/?email=${email}`);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/slot/get-slot")
      .then((res) => res.json())
      .then((result) => {
        setshowslot(result);
      });
  }, []);

    React.useEffect(() => {
    fetch("http://localhost:8080/slot/get-slot")
      .then((res) => res.json())
      .then((result) => {
        setshowslot(result);
      });
  }, []);
 
  React.useEffect(() => {
    loadUser();
  },[id]);

  const loadUser = async () => {
    const response = await fetch(`http://localhost:8080/slot/get-student/${id}`);
    const result = await response.json();
    setname(result.name);
    setrollno(result.rollno);
    setEmail(result.email);
    setpid(result.pid);
    setslot(result.slot);
  };
  return (
    <div>
      <br></br>

      <Container>
        <Typography variant="h4" style={{ fontFamily: "cursive" }}>
          PRESENTERS EDITING
        </Typography>
        <br></br>
        <br></br>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={5}>
            <Card style={{ padding: "20px" }} elevation={5}>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </Grid>
              <br></br>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Roll No"
                  variant="outlined"
                  fullWidth
                  value={rollno}
                  onChange={(e)=>setrollno(e.target.value)}
                />
              </Grid>
              <br></br>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={Email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <br></br>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="ProjectId"
                  variant="outlined"
                  value={pid}
                  onChange={(e)=>setpid(e.target.value)}
                  fullWidth
                />
              </Grid>
              <br></br>
              <Grid item xs={12} sm={12} md={12}>
                <Box sx={{ minWidth: 120 }}>
              
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
                  <MenuItem key={showslot.date + showslot.time} value={`${showslot.date} - ${showslot.time}`}>
                    {showslot.date} - {showslot.time}
                  </MenuItem>
                ))}
                  </Select>
                </FormControl>
                </Box>
              </Grid>
              <br></br>
              <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained" fullWidth onClick={handleEdit}>
                  submit
                </Button>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
