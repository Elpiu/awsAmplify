const express = require('express')
const PORT = 4000

const graphglHTTP = require('express-graphql')
const schema = require('./schema/schema')


const app = express()
app.use('/graphql', graphglHTTP.graphqlHTTP({
  graphiql: true,
  schema: schema
}))


app.listen(PORT, () => {
  console.log(`Listening for request on my awesome port ${PORT}`)
})

