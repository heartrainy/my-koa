const Router = require('koa-router');
const User = require('./../models/user')

let router = new Router();

router.post('/getUserList', async (ctx, next) => {
  var pageNum = ctx.request.body.pageNum;
  var pageSize = ctx.request.body.pageSize;
  const list = await User.find();
  const response = {}
  response.data = list;
  ctx.body = response;
});

module.exports = router;