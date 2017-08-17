
import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';


const APP_PORT = 3000;
const app = Express();

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});

// const express = require('express');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare()
// .then(() => {
//   const server = express();

//   server.get('/p/:id', (req, res) => {
//     const actualPage = '/post';
//     const queryParams = { title: req.params.id };
//     app.render(req, res, actualPage, queryParams);
//   });

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(3000, (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('> Ready on http://localhost:3000');
//   });
// })
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });
