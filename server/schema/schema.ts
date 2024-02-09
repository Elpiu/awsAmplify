import {GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString,} from 'graphql';

// Import dummy data
import {hobbiesData, postsData, usersData} from './dummyData';
import {PostType} from "./types/PostType";
import {UserType} from "./types/UserType";
import {HobbyType} from "./types/HobbyType";


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
        users: {
          type: GraphQLList(UserType),
          resolve(parent, args) {
            return usersData
          }
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
        hobbies: {
          type: GraphQLList(HobbyType),
          resolve(parent, args) {
            return hobbiesData
          }
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
        posts: {
          type: GraphQLList(PostType),
          resolve(parent, args) {
            return postsData
          },
        }
      })

    })
;

// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        //id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        profession: {type: GraphQLString},
      },
      resolve(parent, args) {
        let user = {
          name: args.name,
          age: args.age,
          profession: args.profession
        }
        return user
      }
    },
    createPost: {
      type: PostType,
      args: {
        //id: {type: GraphQLID},
        comment: {type: GraphQLString},
        userId: {type: GraphQLID}
      },
      resolve(parent, args) {
        let post = {
          comment: args.comment,
          userId: args.userId
        }
        return post
      }
    },
    createHobby: {
      type: HobbyType,
      args: {
        //id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        userId: {type: GraphQLID}
      },
      resolve(parent, args) {
        let hobby = {
          title: args.title,
          description: args.description,
          userId: args.userId
        }
        return hobby
      }
    }
  }
})


const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

export default schema;
