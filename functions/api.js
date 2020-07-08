const express = require("express")
const bodyParser = require("body-parser")
const expressGraphQL = require("express-graphql")
const serverless = require("serverless-http")

const app = express();

app.use(bodyParser.json())
app.use(
  "/",
  expressGraphql({
    graphiql: true
  })
)

module.exports.handler = serverless(app)
