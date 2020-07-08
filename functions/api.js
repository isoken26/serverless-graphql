const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const serverless = require("serverless-http");
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World",
      },
      hoge: {
        type: GraphQLInt,
        resolve: () => 100,
      }
    }),
  }),
});

const app = express();

app.use(express.json());
app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

module.exports.handler = serverless(app);