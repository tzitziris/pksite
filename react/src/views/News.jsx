// import {Link} from "react-router-dom";
// import * as React from 'react';
// import {CardMedia,CardActions,Button, Container, Box, Typography, Card, CardContent, CssBaseline } from '@mui/material';
// import { makeStyles } from "@mui/styles";

// function News() {
//   return (
//        <div 
//       >
//         <CssBaseline />
//         <Typography variant="h4" 
//           sx={{ 
//             fontWeight: 'bold', 
//             mb: 4,
//             marginLeft: '15px',
//             marginTop: '15px'
//           }}
//         >
//           Blog Page
//         </Typography>
//       </div>
//   );
// };

// export default News;
// ------------------------

// import React from 'react';
// import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid } from '@mui/material';

// const newsItems = [
//   { title: 'News 1', description: 'Description for news 1', image: 'https://i.ytimg.com/vi/5ZJCDbszAE4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDrGBWuSQE6CJYcg7Vr7GDZH4XSQ' },
//   { title: 'News 2', description: 'Description for news 2', image: 'https://i.ytimg.com/vi/ZivaNOBf0Io/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCs2VjFBnwx-F-ek5PxyKO1ggYWTw' },
//   { title: 'News 3', description: 'Description for news 3', image: 'https://static.independent.co.uk/2024/06/21/20/GettyImages-2153595040.jpg' },
//   { title: 'News 3', description: 'Description for news 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZUCwX9aEmMWGBIaDoOP75GmnuMWNAFZbFg&s' },
//   { title: 'News 3', description: 'Description for news 3', image: 'https://phantom-marca.unidadeditorial.es/1216018eca3e5ab745ddaf809e06d76b/resize/828/f/jpg/assets/multimedia/imagenes/2024/09/13/17262108115956.jpg' },
//   { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
//   { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
//   { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
  
// ];

// export default function BlogPage() {
  
//   return (
//     <Container maxWidth="lg">
//   {/* Page Title */}
//   <Box mt={4} mb={2}>
//     <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
//       Blog Page
//     </Typography>
//   </Box>

//   {/* News Cards - Grid Layout */}
//   <Grid container spacing={4}>
//     {newsItems.map((news, index) => (
//       <Grid item xs={12} sm={6} md={4} key={index}>
//         {/* Wrapper Box for the Gray Margin */}
//         <Box
//           sx={{
//             backgroundColor: '#818181',  // Gray background for margin
//             padding: '8px',               // 2mm space around the card (8px in px)
//             borderRadius: '8px',          // Optional: Rounded corners for the wrapper
//             display: 'flex',
//             justifyContent: 'center',     // Center content inside the wrapper
//             alignItems: 'center',         // Center vertically as well
//           }}
//         >
//           {/* Card Content with a Different Background Color */}
//           <Card
//             sx={{
//               width: '100%', // Card width set to 100% of the grid item
//               maxWidth: 345, // You can set a maximum width for the card
//               height: 370,//400   // Set a fixed height for the card
//               backgroundColor: '#fff', // Inside background color for the card (white)
//               boxShadow: 3,            // Initial box-shadow for the card
//               transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for shadow change
//               '&:hover': {
//                 boxShadow: 6,         // Increased shadow on hover
//                 cursor: 'pointer',    // Change cursor to pointer when hovering over the card
//               },
//             }}
//           >
//             {/* Image Box with Fixed Dimensions */}
//             <Box
//               sx={{
//                 width: '100%',
//                 height: 200, // Fixed height for the image
//                 overflow: 'hidden',
//               }}
//             >
//               <img
//                 src={news.image}
//                 alt={news.title}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   objectPosition: 'center',
//                 }}
//               />
//             </Box>

//             {/* Card Content */}
//             <CardContent sx={{ paddingBottom: '16px' }}>
//               {/* Title with Hover Effect for Underline */}
//               <Typography 
//                 variant="h5" 
//                 component="div" 
//                 sx={{
//                   '&:hover': {
//                     textDecoration: 'underline',  // Underline on hover
//                     cursor: 'pointer',            // Change cursor to indicate interactivity
//                   },
//                   transition: 'text-decoration 0.3s ease-in-out', // Smooth underline transition
//                 }}
//               >
//                 {news.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {news.description}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Read More</Button>
//             </CardActions>
//           </Card>
//         </Box>
//       </Grid>
//     ))}
//   </Grid>
// </Container>

  
//   );
// }
// ----------------------------------------

// import React from 'react';
// import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid } from '@mui/material';

// const newsItems = [
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://i.ytimg.com/vi/5ZJCDbszAE4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDrGBWuSQE6CJYcg7Vr7GDZH4XSQ'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://i.ytimg.com/vi/ZivaNOBf0Io/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCs2VjFBnwx-F-ek5PxyKO1ggYWTw'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://static.independent.co.uk/2024/06/21/20/GettyImages-2153595040.jpg'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://phantom-marca.unidadeditorial.es/1216018eca3e5ab745ddaf809e06d76b/resize/828/f/jpg/assets/multimedia/imagenes/2024/09/13/17262108115956.jpg'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZUCwX9aEmMWGBIaDoOP75GmnuMWNAFZbFg&s'
//   },
// ];

// export default function BlogPage() {
//   return (
//     <Box sx={{ bgcolor: '#121212', color: '#e0e0e0', paddingBottom: 5 }}> {/* Very dark background and light text */}
//       <Container maxWidth="lg">
        
//         {/* Page Title */}
//         <Box mt={0} mb={2} pt={2}>
//           <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#b0bec5' }}> {/* Subtle blue-gray for title */}
//             News
//           </Typography>
//         </Box>

//         {/* News Cards */}
//         <Grid container spacing={4}>
//           {newsItems.map((news, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', background: '#1e1e1e', color: '#e0e0e0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}> {/* Darker card background */}
                
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={news.image}
//                   alt={news.title}
//                 />
                
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography variant="h5" component="div" sx={{ color: '#90a4ae' }}> {/* Cool-toned gray-blue for news title */}
//                     {news.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ color: '#9e9e9e' }}> {/* Muted gray for description */}
//                     {news.description}
//                   </Typography>
//                 </CardContent>
                
//                 <CardActions>
                // <Box 
                //   sx={{ 
                //     display: 'flex', 
                //     justifyContent: 'space-between', 
                //     alignItems: 'center', // Ensures vertical alignment
                //     width: '100%' 
                //   }}
                // >
                //   <Button size="small" sx={{ color: '#90caf9' }}>Read More</Button>
                //   <Typography sx={{ textAlign: 'right', marginRight: '16px' }}>
                //     {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                //   </Typography>
                // </Box>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }


// -------------------
//last
// import React from 'react';
// import { Box, Typography, Container, Button } from '@mui/material';

// const newsItems = [
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://i.ytimg.com/vi/5ZJCDbszAE4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDrGBWuSQE6CJYcg7Vr7GDZH4XSQ'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://i.ytimg.com/vi/ZivaNOBf0Io/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCs2VjFBnwx-F-ek5PxyKO1ggYWTw'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://static.independent.co.uk/2024/06/21/20/GettyImages-2153595040.jpg'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021.',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://phantom-marca.unidadeditorial.es/1216018eca3e5ab745ddaf809e06d76b/resize/828/f/jpg/assets/multimedia/imagenes/2024/09/13/17262108115956.jpg'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021.Noteworthy technology acquisitions 2021.Noteworthy technology acquisitions 2021.',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZUCwX9aEmMWGBIaDoOP75GmnuMWNAFZbFg&s'
//   },
// ];

// export default function BlogPage() {
//   return (
//     <Box sx={{ bgcolor: '#121212', color: '#e0e0e0', paddingBottom: 5 }}> {/* Very dark background */}
//       <Container maxWidth="md"> {/* Narrower container */}
        
//         {/* Page Title */}
//         <Box mt={0} mb={4} pt={2}>
//           <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#b0bec5' }}> {/* Subtle blue-gray for title */}
//             News
//           </Typography>
//         </Box>

//         {/* News Cards */}
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}> {/* Vertical layout with spacing */}
//           {newsItems.map((news, index) => (
//             <a 
//               key={index}
//               href="#"
//               style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 alignItems: 'stretch',
//                 backgroundColor: '#1e1e1e',
//                 border: '1px solid #424242',
//                 borderRadius: '12px',
//                 overflow: 'hidden',
//                 textDecoration: 'none',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//                 height: '200px', // Ensures consistent card height
//               }}
//             >
//               {/* Image Section */}
//               <img
//                 style={{
//                   objectFit: 'cover',
//                   width: '40%', // Take 40% of the width
//                   height: '100%',
//                 }}
//                 src={news.image}
//                 alt={news.title}
//               />

//               {/* Text Section */}
//               <div style={{ padding: '16px', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                 {/* Title and Description */}
//                 <Box>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 'bold',
//                     color: '#e0e0e0',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     display: '-webkit-box',
//                     WebkitBoxOrient: 'vertical',
//                     WebkitLineClamp: 2, // Number of visible lines before truncating
//                   }}
//                 >
//                   {news.title}
//                 </Typography>

//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: '#9e9e9e',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                       display: '-webkit-box',
//                       WebkitBoxOrient: 'vertical',
//                       WebkitLineClamp: 4, // Number of visible lines before truncating
//                     }}
//                   >
//                     {news.description}
//                   </Typography>
//                 </Box>

//                 {/* Read More and Date */}
//                 <Box 
//                   sx={{ 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center',
//                     marginTop: '16px' 
//                   }}
//                 >
//                   <Button size="small" sx={{ color: '#90caf9' }}>Read More</Button>
//                   <Typography sx={{ textAlign: 'right', color: '#9e9e9e' }}>
//                     {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
//                   </Typography>
//                 </Box>
//               </div>
//             </a>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }
// -------------------------
// import React from 'react';
// import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid } from '@mui/material';

// const newsItems = [
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://i.ytimg.com/vi/5ZJCDbszAE4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDrGBWuSQE6CJYcg7Vr7GDZH4XSQ'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://i.ytimg.com/vi/ZivaNOBf0Io/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCs2VjFBnwx-F-ek5PxyKO1ggYWTw'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://static.independent.co.uk/2024/06/21/20/GettyImages-2153595040.jpg'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021.',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://phantom-marca.unidadeditorial.es/1216018eca3e5ab745ddaf809e06d76b/resize/828/f/jpg/assets/multimedia/imagenes/2024/09/13/17262108115956.jpg'
//   },
//   {
//     title: 'Noteworthy technology acquisitions 2021.Noteworthy technology acquisitions 2021.Noteworthy technology acquisitions 2021.',
//     description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZUCwX9aEmMWGBIaDoOP75GmnuMWNAFZbFg&s'
//   },
// ];

// export default function BlogPage() {
//   return (
//     <Box sx={{ bgcolor: '#121212', color: '#e0e0e0', paddingBottom: 5 }}>
//       <Container maxWidth="lg">
//         <Box mt={0} mb={2} pt={2}>
//           <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#b0bec5' }}>News</Typography>
//         </Box>

//         <Grid container spacing={4}>
//           {newsItems.map((news, index) => (
//             <Grid item xs={12} key={index}>
//               <Card sx={{ display: 'flex', background: '#1e1e1e', color: '#e0e0e0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
//                 <CardMedia
//                   component="img"
//                   sx={{ width: '40%' }}
//                   image={news.image}
//                   alt={news.title}
//                 />
//                 <CardContent sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//   <Box sx={{ maxHeight: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//     <Typography
//       variant="h5"
//       sx={{
//         fontWeight: 'bold',
//         color: '#e0e0e0',
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         display: '-webkit-box',
//         WebkitBoxOrient: 'vertical',
//         WebkitLineClamp: 2,
//         marginBottom: '8px',
//       }}
//     >
//       {news.title}
//     </Typography>
//     <Typography
//       variant="body2"
//       sx={{
//         color: '#9e9e9e',
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         display: '-webkit-box',
//         WebkitBoxOrient: 'vertical',
//         WebkitLineClamp: 3,
//       }}
//     >
//       {news.description}
//     </Typography>
//   </Box>
//   <Box 
//     sx={{ 
//       display: 'flex', 
//       justifyContent: 'space-between', 
//       alignItems: 'center', 
//       marginTop: 'auto',
//     }}
//   >
//     <Button size="small" sx={{ color: '#90caf9' }}>Read More</Button>
//     <Typography sx={{ textAlign: 'right', color: '#9e9e9e' }}>
//       {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
//     </Typography>
//   </Box>
// </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// ----------

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const newsItems = [
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: 'https://i.ytimg.com/vi/5ZJCDbszAE4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDrGBWuSQE6CJYcg7Vr7GDZH4XSQ'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: 'https://i.ytimg.com/vi/ZivaNOBf0Io/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCs2VjFBnwx-F-ek5PxyKO1ggYWTw'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: 'https://cdn.onefc.com/wp-content/uploads/2022/01/Beybulat-Isaev-Giannis-Stoforidis-HEAVYHITTERS-1920X1280-20.jpg-1200x800.jpg'
  },
  {
    title: 'Noteworthy technology acquisitions 2021.',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1024,format=auto/sites/default/files/d8/images/canvas/2022/01/14/7f162912-114a-44aa-94e1-4b18c1d4b83e_b344c504.jpg'
  },
  {
    title: 'Noteworthy technology acquisitions 2021.Noteworthy technology acquisitions 2021.Noteworthy technology acquisitions 2021.',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZUCwX9aEmMWGBIaDoOP75GmnuMWNAFZbFg&s'
  },
];

export default function BlogPage() {
  return (
    <Box sx={{ bgcolor: '#121212', color: '#e0e0e0', paddingBottom: 5 }}>
      <Container maxWidth="md">
        <Box mt={0} mb={4} pt={2}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#b0bec5' }}>
            News
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {newsItems.map((news, index) => (
            <a
              key={index}
              href="#"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                backgroundColor: '#1e1e1e',
                border: '1px solid #424242',
                borderRadius: '12px',
                overflow: 'hidden',
                textDecoration: 'none',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                height: '200px',
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  width: '40%', // Fixed width for the image container
                  height: '100%', // Match the card height
                  position: 'relative',
                }}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  style={{
                    objectFit: 'contain', // Ensures the entire image is visible
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000', // Optional: Adds a background for letterboxing/pillarboxing
                  }}
                />
              </div>

              <div
                style={{
                  padding: '16px',
                  textAlign: 'left',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#e0e0e0',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                    }}
                  >
                    {news.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#9e9e9e',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 4,
                    }}
                  >
                    {news.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                  }}
                >
                  <Button size="small" sx={{ color: '#90caf9' }}>Read More</Button>
                  <Typography sx={{ textAlign: 'right', color: '#9e9e9e' }}>
                    {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </Typography>
                </Box>
              </div>
            </a>
          ))}
        </Box>
      </Container>
    </Box>
  );
}