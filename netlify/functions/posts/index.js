const { builder } = require("@netlify/functions");
const ServerlessHttp = require("serverless-http");
const app = require("./app");

const handler = builder(ServerlessHttp(app));

module.exports = { handler };
