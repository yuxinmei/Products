const Koa = require("koa");
const cors = require("koa2-cors");
const Router = require("../routers");
const bodyParser = require("koa-bodyparser");
require('./database');

const app = new Koa();
app.use(cors());

app.use(bodyParser());

app.use(Router.routes(), Router.allowedMethods());

module.exports = app;
