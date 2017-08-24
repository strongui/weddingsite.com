import {
  // GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import { Kind } from 'graphql/language';
import Db from './db';

const DateScalarType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});


const UserPreference = new GraphQLObjectType({
  name: 'UserPreference',
  description: 'This is a User Preference',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(userPreference) {
          return userPreference.id;
        }
      },
      userId: {
        type: GraphQLInt,
        resolve(userPreference) {
          return userPreference.userId;
        }
      },
      theme: {
        type: GraphQLString,
        resolve(userPreference) {
          return userPreference.theme;
        }
      }
    };
  }
});

const User = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User in the site',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(user) {
          return user.id;
        }
      },
      uuid: {
        type: GraphQLString,
        resolve(user) {
          return user.uuid;
        }
      },
      email: {
        type: GraphQLString,
        resolve(user) {
          return user.email;
        }
      },
      password: {
        type: GraphQLString,
        resolve(user) {
          return user.password;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(user) {
          return user.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(user) {
          return user.lastName;
        }
      },
      birthdate: {
        type: DateScalarType,
        resolve(user) {
          return user.birthdate;
        }
      },
      type: {
        type: GraphQLInt,
        resolve(user) {
          return user.type;
        }
      },
      user_preferences: {
        type: UserPreference,
        resolve(user) {
          return user.getUser_preference();
        }
      }
    };
  }
});

const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'This represents a Post in the site',
  fields: () => {
    return {
      id: {
        type: GraphQLInt
      },
      uuid: {
        type: GraphQLString
      },
      title: {
        type: GraphQLString
      },
      votes: {
        type: GraphQLInt
      },
      url: {
        type: GraphQLString
      }
    };
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root Query',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(User),
        args: {
          id: {
            type: GraphQLInt
          },
          uuid: {
            type: GraphQLString
          },
          email: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return Db.models.user.findAll({where: args});
        }
      },
      allPosts: {
        type: new GraphQLList(Post),
        args: {
          first: {
            type: GraphQLInt
          },
          offset: {
            type: GraphQLInt
          },
          id: {
            type: GraphQLInt
          },
          title: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          const {first: limit, offset, ...rest} = args;
          return Db.models.post.findAll({
            where: rest,
            offset,
            limit
          });
        }
      },

      user_preferences: {
        type: new GraphQLList(UserPreference),
        args: {
          id: {
            type: GraphQLInt
          },
          userId: {
            type: GraphQLInt
          },
          theme: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return Db.models.user_preference.findAll({where: args});
        }
      }
    };
  }
});

const UserMutation = new GraphQLObjectType({
  name: 'UserMutation',
  description: 'Mutiation on User Table',
  fields() {
    return {
      addUser: {
        type: User,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(source, args) {
          return Db.models.user.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email.toLowerCase()
          });
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: UserMutation
});

export default Schema;
