/* Amplify Params - DO NOT EDIT
	API_GRAPHQLAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_GRAPHQLAPI_GRAPHQLAPIIDOUTPUT
	AUTH_LAMBDARESOLVERSD4F852A1_USERPOOLID
	ENV
	REGION
	STORAGE_USERS_ARN
	STORAGE_USERS_NAME
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const resolvers = {
  Query: {
    getUser: async (ctx) => {
      var params = {
        TableName: process.env.STORAGE_USERS_NAME,
        Key: { id: ctx.arguments.userId },
      };
      try {
        const { Item } = await docClient.get(params).promise();
        return Item;
      } catch (err) {
        console.error(`Error while fetching user: ${userId}`, err);
      }
    },
    listUsers: async (ctx) => {
      var params = {
        TableName: process.env.STORAGE_USERS_NAME,
      };
      const { Items } = await docClient.scan(params).promise();
      return Items;
    },
  },
  Mutation: {
    createUser: async (ctx) => {
      const { user } = ctx.arguments;
      const params = {
        TableName: process.env.STORAGE_USERS_NAME,
        Item: {
          id: "" + Date.now(),
          ...user,
        },
      };

      try {
        await docClient.put(params).promise();
        return params.Item;
      } catch (err) {
        console.error("DynamoDB error: ", err);
      }
    },
  },
};

exports.handler = async (event) => {
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};
