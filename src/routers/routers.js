const Router = require('koa-router');
const User = require('./../models/user')

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let router = new Router();

router.post('/getUserList', async (ctx, next) => {
  var pageNum = ctx.request.body.pageNum;
  var pageSize = ctx.request.body.pageSize;
  const list = await User.find();
  const response = {}
  response.code = 0;
  response.data = list;
  await delay(2000);
  ctx.body = response;
});

router.post('/addUser', async (ctx, next) => {
  const userFields = ctx.request.body;
  await delay(2000);
  await User.create(userFields);
  const response = {}
  response.code = 0;
  response.data = {};
  ctx.body = response;
});

module.exports = router;