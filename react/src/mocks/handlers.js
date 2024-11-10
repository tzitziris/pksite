// import { rest } from 'msw';

// // Mock the API response for news articles
// export const handlers = [
//   rest.get('/api/news', (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         {
//           id: 1,
//           title: 'News Article 1',
//           date: '2024-10-27',
//           content: 'Content of article 1. This is some detailed information about news article 1.',
//         },
//         {
//           id: 2,
//           title: 'News Article 2',
//           date: '2024-10-26',
//           content: 'Content of article 2. This article covers different aspects of the news.',
//         },
//         {
//           id: 3,
//           title: 'News Article 3',
//           date: '2024-10-25',
//           content: 'Content of article 3. More information about this third article.',
//         },
//       ])
//     );
//   }),
// ];
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/news', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'News Article 1', date: '2024-10-27', content: 'Content of article 1.' },
        { id: 2, title: 'News Article 2', date: '2024-10-26', content: 'Content of article 2.' },
        { id: 3, title: 'News Article 3', date: '2024-10-25', content: 'Content of article 3.' },
      ])
    );
  }),
];
