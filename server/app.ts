import express from 'express';
import {graphqlHTTP} from 'express-graphql';


import schema from './schema/schema';

const PORT = 4000;

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema: schema,
    })
);

app.listen(PORT, () => {
  console.log(`Listening for requests on my awesome port ${PORT}`);
});
