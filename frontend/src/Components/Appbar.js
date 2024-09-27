import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import img from "../images/profile.png";
import { useNavigate } from "react-router-dom";
function ResponsiveAppBar({ studentDetails }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    handleCloseUserMenu();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLogout = () => {
    // Clear any authentication tokens or session information
    localStorage.removeItem("accessToken"); // Example: Remove access token from local storage

    // Redirect to the login page
    window.location.href = "/"; // Example: Redirect to the login page
  };
  const navigate = useNavigate();

  const fontfamily = { fontFamily: "cursive" };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            marginRight: 2,
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          REVIEW SCHEDULING PORTAL
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Profile" src={img} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleOpenDialog}>
              <Typography textAlign="center" style={fontfamily}>
                Slot
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center" style={fontfamily}>
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Box>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            <p1 style={fontfamily}>Booked Slot</p1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {studentDetails.length === 0 ? (
                <p1 style={fontfamily}>No slot is Booked</p1>
              ) : (
                studentDetails.map((item) => (
                  <div key={item.id}>
                    <p1 style={fontfamily}>Name: {item.name}</p1>
                    <br />
                    <p1 style={fontfamily}>Roll No: {item.rollno}</p1>
                    <br />
                    <p1 style={fontfamily}>Email: {item.email}</p1>
                    <br />
                    <p1 style={fontfamily}>PID: {item.pid}</p1>
                    <br />
                    <p1 style={fontfamily}>Slot: {item.slot}</p1>
                    <br />
                    <br />
                    <DialogActions>
                      <Button
                        onClick={() => {
                          navigate(`/studentslotedit/${item.id}/${item.email}`);
                        }}
                        style={fontfamily}
                      >
                        Edit
                      </Button>
                      <Button onClick={handleCloseDialog} style={fontfamily}>
                        Close
                      </Button>
                    </DialogActions>
                  </div>
                ))
              )}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
