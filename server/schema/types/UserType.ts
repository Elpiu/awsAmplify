import {GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {PostType} from "./PostType";
import {hobbiesData, postsData} from "../dummyData";
import {it} from "node:test";
import {HobbyType} from "./HobbyType";

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Documentation for user...',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    profession: {type: GraphQLString},

    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args){
        return postsData.filter(item => item.userId === parent.id)
      }
    },
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return hobbiesData.filter(item => item.userId === parent.id)

      }
    }
  }),
});