import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  // Define the state for the selected navigation value
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue); // Update the value when a navigation option is selected
      }}
      sx={{
        position: 'fixed',          // Sticks the footer to the bottom
        bottom: 0,
        left: 0,
        width: '100vw',             // Ensures it spans the full viewport width
        backgroundColor: '#333',
        color: '#fff',
        zIndex: 1300, 
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default Footer;

