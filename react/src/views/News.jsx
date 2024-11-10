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
import React from 'react';
import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid } from '@mui/material';

const newsItems = [
  { title: 'News 1', description: 'Description for news 1', image: 'https://i.ytimg.com/vi/5ZJCDbszAE4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDrGBWuSQE6CJYcg7Vr7GDZH4XSQ' },
  { title: 'News 2', description: 'Description for news 2', image: 'https://via.placeholder.com/150' },
  { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
  { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
  { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
  { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
  { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
  { title: 'News 3', description: 'Description for news 3', image: 'https://via.placeholder.com/150' },
  
  // Add more news items here
];

export default function BlogPage() {
  // return (
  //   <Container maxWidth="lg">
  //     {/* Page Title */}
  //     <Box mt={4} mb={2}>
  //       <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
  //         Blog Page
  //       </Typography>
  //     </Box>

  //     {/* News Cards */}
  //     <Grid container spacing={4}>
  //       {newsItems.map((news, index) => (
  //         <Grid item xs={12} sm={6} md={4} key={index}>
  //           <Card sx={{ maxWidth: 345 }}>
  //             <CardMedia
  //               component="img"
  //               height="140"
  //               image={news.image}
  //               alt={news.title}
  //             />
  //             <CardContent>
  //               <Typography variant="h5" component="div">
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
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Container>
  // );
  return (
    <Box 
      sx={{ 
        backgroundColor: '#818181', minHeight: '100vh', py: 4 
      }}
    >
    <Container maxWidth="lg">
      {/* Page Title */}
      <Box mt={4} mb={2}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Blog Page
        </Typography>
      </Box>

      {/* News Cards */}
      <Grid container spacing={4}>
        {newsItems.map((news, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex' }}>
              {/* Image on the Left */}
              <CardMedia
                component="img"
                sx={{ width: 150 }}  // Set a fixed width for the left image
                image={news.image}
                alt={news.title}
              />

              {/* Content on the Right */}
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
// ------------------------

// import React, { useState, useEffect } from 'react';
// import { Box, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedArticle, setExpandedArticle] = useState(null);

//   useEffect(() => {
//     // Fetch news from the mock API (intercepted by MSW)
//     fetch('/api/news')
//       .then((response) => {
//         // Log the full response object for debugging
//         console.log('Response:', response);

//         // Check if the response is OK (status code 200-299)
//         if (!response.ok) {
//           throw new Error('Network response was not ok: ' + response.statusText);
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log('Fetched news data:', data); // Log the fetched data
//         setNews(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching news:", error); // Log the error
//         setLoading(false); // Stop loading state
//       });
//   }, []);

//   if (loading) return <CircularProgress />;

//   return (
//     <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
//       {news.map((article) => (
//         <Card key={article.id} sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5">{article.title}</Typography>
//             <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//               {article.date}
//             </Typography>
//             <Typography variant="body2" noWrap={!expandedArticle || expandedArticle !== article.id}>
//               {article.content}
//             </Typography>
//             <Button
//               variant="text"
//               color="primary"
//               onClick={() =>
//                 setExpandedArticle(expandedArticle === article.id ? null : article.id)
//               }
//             >
//               {expandedArticle === article.id ? 'Show Less' : 'Read More'}
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default News;
