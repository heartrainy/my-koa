const Router = require('koa-router');
const User = require('./../models/user')

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let router = new Router();

router.post('/getUserList', async (ctx, next) => {
  var pageNum = ctx.request.body.pageNum;
  var pageSize = ctx.request.body.pageSize;
  const list = await User.find();
  const response = {}
  response.data = list;
  await delay(2000);
  ctx.body = response;
});

module.exports = router;