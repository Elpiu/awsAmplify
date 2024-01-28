import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";
import {UserType} from "./UserType";
import {usersData} from "../dummyData";

export const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Documentation for post...',
  fields: () => ({
    id: {type: GraphQLID},
    comment: {type: GraphQLString},
    user: {
      type: UserType,
      resolve(parent, args){
        return usersData.filter(item => item.id === parent.userId)[0]
      }
    }
  }),
});