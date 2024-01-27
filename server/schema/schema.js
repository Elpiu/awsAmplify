const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql
const _ = require('lodash')

var dummyDataArray= [
  { "id": "1", "name": "John Doe", "age": 25 },
  { "id": "2", "name": "Jane Smith", "age": 30 },
  { "id": "3", "name": "Bob Johnson", "age": 22 },
  { "id": "4", "name": "Alice Williams", "age": 28 },
  { "id": "5", "name": "Charlie Brown", "age": 35 },
  { "id": "6", "name": "Eva Martinez", "age": 26 },
  { "id": "7", "name": "Michael Taylor", "age": 32 },
  { "id": "8", "name": "Olivia Clark", "age": 29 },
  { "id": "9", "name": "David Turner", "age": 31 },
  { "id": "10", "name": "Sophie Anderson", "age": 27 }
]



// Create types
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Documentation for user...',
  fields: () => ({
    //id: {type: GraphQLID},
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
})

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Description',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {type: GraphQLString}
      },
      resolve(parent, args) {
        // we resolve with data
        // get and return data from a datasource
        return _.find(dummyDataArray, {id: args.id})
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
