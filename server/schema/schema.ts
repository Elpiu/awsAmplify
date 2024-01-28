import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLSchema,} from 'graphql';
import _ from 'lodash';

// Import dummy data
import {hobbiesData, postsData, usersData} from './dummyData';
import {PostType} from "./types/PostType";
import {UserType} from "./types/UserType";
import {HobbyType} from "./types/HobbyType";
import {it} from "node:test";


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
        return usersData.find(item => item.id === Number(args.id));
      },
    },

    hobby: {
      type: HobbyType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        return hobbiesData.find(item => item.id === Number(args.id));
      },
    },
    post: {
      type: PostType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        return postsData.find(item => item.id === Number(args.id));
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
