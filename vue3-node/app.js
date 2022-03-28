const Koa = require("koa");
const cors = require("koa2-cors");
const Router = require("./routers/index");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(cors());

app.use(bodyParser());

app.use(Router.routes(), Router.allowedMethods());
app.listen(3001);
