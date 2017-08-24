import express from 'express';
import Schema from './schema';
const graphqlHTTP = require('express-graphql');


const port = parseInt(process.env.PORT, 10) || 3333;
const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

const server = express();

server.use('/graphql',
  // bodyParser.json(),
  graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
  })
);

server.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on http://localhost:${port}`);
});

