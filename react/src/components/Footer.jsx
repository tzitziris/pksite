// import React, { useState } from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, EmailIcon } from '@mui/material';


// function Footer() {
//   // Define the state for the selected navigation value
//   const [value, setValue] = useState(0);

//   return (

    // <BottomNavigation
    //   showLabels
    //   value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue); // Update the value when a navigation option is selected
    //   }}
    //   sx={{
    //     position: 'fixed',          // Sticks the footer to the bottom
    //     bottom: 0,
    //     left: 0,
    //     width: '100vw',             // Ensures it spans the full viewport width
    //     backgroundColor: '#333',
    //     color: '#fff',
    //     zIndex: 1300, 
    //   }}
    // >
    //   <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    //   <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    //   <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    // </BottomNavigation>
    // <Box
    //   sx={{
    //     width: "100%",
    //     height: "auto",
    //     backgroundColor: "secondary.main",
    //     paddingTop: "1rem",
    //     // paddingTop : 5,
    //     paddingBottom: "1rem",
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     <Grid container direction="column" alignItems="center">
    //       <Grid item xs={12}>
    //         <Typography color="black" variant="h5">
    //           React Starter App
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Typography color="textSecondary" variant="subtitle1">
    //           {`${new Date().getFullYear()} | React | Material UI | React Router`}
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>

    
  
//   );
// }

// export default Footer;

import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#000', color: '#e0e0e0', py: 4 }}>
      <Container maxWidth="lg">
        
        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 3 }}>
          OUR CONTACT INFORMATION {/*<span style={{ color: '#f1c40f' }}>CONTACT INFORMATION</span>*/}
        </Typography>
        
        {/* Contact Information */}
        <Grid container spacing={4}>
          {/* Hemmers Gym Breda (Holland) */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#e0e0e0', fontWeight: 'bold' }}>
              Hemmers Gym Breda (Holland)
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>nickhemmers@hotmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>Private or professional training: +31634500308</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <LocationOnIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>Druivenstraat 33, 4816 KB, Breda, NL</Typography>
            </Box>
          </Grid>
          
          {/* Fightershouse Reservation */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#e0e0e0', fontWeight: 'bold' }}>
              Fightershouse Reservation
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>info@hemmers-academy.nl</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>+49-15259141937 (Merle Brand)</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <LocationOnIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>Druivenstraat 33, 4816 KB, Breda, NL</Typography>
            </Box>
          </Grid>

          {/* Hemmers Gym Brasil */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#e0e0e0', fontWeight: 'bold' }}>
              Hemmers Gym Brasil
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>hemmersgym_brasil2015@hotmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>+55 4130354559</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <LocationOnIcon sx={{ color: '#f1c40f', mr: 1 }} />
              <Typography>Rua Norberto de Brito, 2085, São José dos Pinhais, BR</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Social Icons */}
        <Box mt={4} display="flex" justifyContent="center">
          <IconButton sx={{ color: '#f1c40f' }} href="https://twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: '#f1c40f' }} href="https://facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: '#f1c40f' }} href="https://instagram.com">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
