const Router = require("koa-router");

const router = new Router();
router.prefix("/api");

router.get("/datas", async (ctx, next) => {
  // console.log(ctx, 111111);
  ctx.type = "json";
  ctx.body = {
    data: [
      {
        id: 0,
        name: "apple",
        stock: 200,
      },
      { id: 1, name: "watermelon", stock: 100 },
      {
        id: 2,
        name: "banana",
        stock: 12,
      },
      {
        id: 3,
        name: "orange",
        stock: 68,
      },
    ],
  };
  return next();
});

router.post("/data", async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = {
    code: 200,
    message: "请求成功",
  };
  return next();
});

router.put("/data/:id", async (ctx, next) => {
  console.log(ctx.params, "put");
  ctx.body = {
    code: 200,
    message: "请求成功",
  };
  return next();
});

router.delete("/data/:id", async (ctx, next) => {
  console.log(ctx.params, "delete");
  ctx.type = "json";
  ctx.body = {
    code: 200,
    message: "请求成功",
    data: [
      {
        id: 0,
        name: "apple",
        stock: 200,
      },
    ],
  };
  return next();
});
module.exports = router;
