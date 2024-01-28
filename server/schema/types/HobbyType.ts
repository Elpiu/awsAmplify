import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";
import {UserType} from "./UserType";
import {usersData} from "../dummyData";

export const HobbyType = new GraphQLObjectType({
  name: 'Hobby',
  description: 'Documentation for hobby...',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    user: {
      type: UserType,
      resolve(parent, args) {
        return usersData.filter(item => item.id === parent.userId)[0]
      }
    }
  }),
});
