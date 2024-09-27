import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import img from '../images/profile.png';

function ResponsiveAppBar({ studentDetails }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };




  const handleLogout = () => {
    // Clear any authentication tokens or session information
    localStorage.removeItem('accessToken'); // Example: Remove access token from local storage
  
    // Redirect to the login page
    window.location.href = '/'; // Example: Redirect to the login page
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <box>
        <Typography variant='h4'>Welcome</Typography>
        <Typography></Typography>
        </box>
        <Typography
          variant="h6"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            marginRight: 2,
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
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
          <br></br>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
           
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center" style={{fontFamily:"cursive"}}>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>

     
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
