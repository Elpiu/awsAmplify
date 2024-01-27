import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString,} from 'graphql';
import _ from 'lodash';

// Import dummy data
import {hobbiesData, postsData, usersData} from './dummyData';

// Create types
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Documentation for user...',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    profession: {type: GraphQLString},
  }),
});

const HobbyType = new GraphQLObjectType({
  name: 'Hobby',
  description: 'Documentation for hobby...',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
  }),
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Documentation for post...',
  fields: () => ({
    id: {type: GraphQLID},
    comment: {type: GraphQLString},
  }),
});

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Description',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        // We resolve with data
        // Get and return data from a datasource
        return _.find(usersData, {id: args.id});
      },
    },

    hobby: {
      type: HobbyType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        return _.find(hobbiesData, {id: args.id});
      },
    },
    post: {
      type: PostType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        return _.find(postsData, {id: args.id});
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
