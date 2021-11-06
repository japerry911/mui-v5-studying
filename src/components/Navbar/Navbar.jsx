import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  return (
    <AppBar elevation={0} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
          component="div"
        >
          <Box>
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{ color: '#616161', marginRight: '20px', cursor: 'pointer' }}
            >
              Home
            </Typography>
            <Typography
              sx={{ color: '#616161', marginRight: '20px', cursor: 'pointer' }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ color: '#616161', marginRight: '20px', cursor: 'pointer' }}
            >
              Categories
            </Typography>
            <Typography
              sx={{ color: '#616161', marginRight: '20px', cursor: 'pointer' }}
            >
              Men
            </Typography>
            <Typography
              sx={{ color: '#616161', marginRight: '20px', cursor: 'pointer' }}
            >
              Women
            </Typography>
            <Typography
              sx={{ color: '#616161', marginRight: '20px', cursor: 'pointer' }}
            >
              FAQ
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{ backgroundColor: '#ff4081' }}
              disableElevation
              variant="contained"
            >
              Account
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketIcon color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
