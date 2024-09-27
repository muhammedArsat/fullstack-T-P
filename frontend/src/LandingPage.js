import { Container, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "./images/collegelogo.png";
import img2 from "./images/studentlogin2.avif";
import img3 from "./images/teacherlogin.avif";
import img from "./images/adminlogin2.avif";
export default function Landingpage() {

  const fontfamily = { fontFamily: "cursive" };
  return (
    <Container>
      <br></br>
      <Paper style={{ padding: "20px", textAlign: "center" }} elevation={5}>
        <img src={img1} alt="college" style={{ width: "200px" }} />
        <br />
        <h4 style={fontfamily}>
          Review Schedule Portal For Students And Teacher
        </h4>
      </Paper>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
      
        <Grid item xs={12} sm={6} md={4}>
        <Link to="/StudentLogin" style={{textDecoration:"none"}}>
          <Paper style={{ padding: "20px", textAlign: "center"}} elevation={5}>
        
            <img src={img2} alt="student login" style={{ width: "200px" }} className="img-hover" />
         
            <br />
         
            <p style={fontfamily}>Student Login</p>
        
          </Paper>
          </Link>
          
        </Grid>
       
        <Grid item xs={12} sm={6} md={4}>
        <Link to="/TeacherLoginpage" style={{textDecoration:"none"}}>
          <Paper style={{ padding: "20px", textAlign: "center" }} elevation={5}>
     
            <img src={img3} alt="teacher login" style={{ width: "200px" }} className="img-hover" />
        
            <br />
            <p style={fontfamily}>Teacher Login</p>
            
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Link to="/Adminloginpage" style={{textDecoration:"none"}}>
          <Paper style={{ padding: "20px", textAlign: "center" }} elevation={5}>
   
            <img src={img} alt="admin login" style={{ width: "200px" }}className="img-hover"  />
         
            <br />
            <p style={fontfamily}>Admin Login</p>
          
          </Paper>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
