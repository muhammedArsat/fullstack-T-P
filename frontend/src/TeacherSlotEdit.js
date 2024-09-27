import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams,useNavigate } from "react-router-dom";

export default function TeacherSlotEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { email } = useParams();
  const [name, setName] = useState("");
  const [slot, setSlot] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setSlot(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:8080/slot/get-slot")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const loadUser = () => {
    fetch(`http://localhost:8080/slot/get-teacher/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result.name);
        setSlot(result.slot);
      });
  };
  useEffect(() => {
    loadUser();
  }, [id]);  // Adding id as a dependency to avoid infinite loop

 const handleEdit  =async () => {
const output={name,slot};
   const response = await fetch(`http://localhost:8080/slot/teacherupdate/${id}`,
   {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(output)
   }
  
   );
   if(response.ok){
    navigate(`/teacherslot/?email=${email}`);
   }
   else{
    const errorData = await response.json();
    console.log(errorData);
   }
  
  }

  return (
    <div>
      <Container>
        <Typography fontFamily="cursive" variant="h4" marginTop="25px">Reviewers Slot Editing</Typography>
        <Grid container spacing={4} justifyContent="center" marginTop="25px">
          <Grid item xs={12} sm={6} md={6}>
            <Card style={{ padding: "25px" }}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                disabled
                fullWidth
              />
              <br />
              <br />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={slot}
                    label="Slot"
                    onChange={handleChange}
                  >
                    {data.map((data, index) => (
                      <MenuItem
                        key={`${data.date}-${data.time}-${index}`}
                        value={`${data.date} - ${data.time}`}
                      >
                        {data.date} - {data.time}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <br />
              <Button variant="contained" onClick={handleEdit}>Submit</Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
