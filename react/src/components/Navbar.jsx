// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const navbarStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '26px 30px',
//     backgroundColor: '#333',
//     color: '#fff',
//     margin: 0
//   };

//   const titleStyle = {
//     fontSize: '25px',
//   };

//   const navLinksStyle = {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '40px',
//     justifyContent: 'center',
//     padding: '0',
//     margin: '0',
//     flexGrow: 1,
//     fontSize: '18px',
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     color: '#fff',
//   };

//   return (
//     <nav style={navbarStyle}>
//       <h1 style={titleStyle}>Fight News</h1>
//       <ul style={navLinksStyle}>
//         <li>
//           <Link to="/home" style={linkStyle}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/news" style={linkStyle}>
//             Latest News
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" style={linkStyle}>
//             About
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// ------------------------------------------------------------------------
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '26px 30px',
//         backgroundColor: '#333',
//         color: '#fff',
//       }}
//     >
//       <h1 style={{ fontSize: '25px' }}>Fight News</h1>
//       <ul
//         style={{
//           listStyle: 'none',
//           display: 'flex',
//           gap: '40px',
//           justifyContent: 'center',
//           padding: '0',
//           margin: '0',
//           flexGrow: 1,
//           fontSize: '18px',
//         }}
//       >
//         <li>
//           <Link to="/home" style={{ textDecoration: 'none', color: '#fff' }}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/news" style={{ textDecoration: 'none', color: '#fff' }}>
//             Latest News
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" style={{ textDecoration: 'none', color: '#fff' }}>
//             About
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// ----------------------------------------------------------------------------
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Latest News', path: '/news' },
//   { label: 'About', path: '/about' }
// ];

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         Fight News
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Fight News
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item.label} component={Link} to={item.path} sx={{ color: '#fff' }}>
//                 {item.label}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;
// ------------------------------------------

// import React from 'react';
// import { Link } from 'react-router-dom';
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// function Navbar(props) {

// // const Navbar = () => {

//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//       <Toolbar sx={{ justifyContent: 'center' }}>
//         <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//         >
//             <MenuIcon />
//         </IconButton>
//         <Typography
//             variant="h6"
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, textAlign: 'left' }}
//         >
//             MUI
//         </Typography>
//         <Box sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: 'center', flexGrow: 1 }}>
//             {navItems.map((item) => (
//             <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//             </Button>
//             ))}
//         </Box>
//       </Toolbar>

//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     );

  

// }

// Navbar.propTypes = {
//   window: PropTypes.func,
// };


// export default Navbar;
// -----------------------------------------------------------------
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'News', path: '/news' },
  { label: 'About', path: '/about' },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link
              to={item.path}
              style={{
                textDecoration: 'none',
                color: '#000',
                width: '100%',
                display: 'block',
              }}
            >
              <Box sx={{ textAlign: 'center', padding: 2 }}>{item.label}</Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, textAlign: 'left' }}
            >
              Fight News
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: 'center', flexGrow: 1 }}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  style={{ textDecoration: 'none', color: '#fff' }}
                >
                  <Button sx={{ color: '#fff' }}>{item.label}</Button>
                </Link>
              ))}
            </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      
      {/* Main content area */}
      <Box component="main" /*sx={{ p: 1.7 }}*/>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
