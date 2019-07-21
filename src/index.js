const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const app = new Koa()

// 解析request body
app.use(bodyParser());

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

router.post('/getUserList', async (ctx, next) => {
  var pageNum = ctx.request.body.pageNum;
  var pageSize = ctx.request.body.pageSize;

  const responseBody = {
    data: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      }
    ]
  }
  ctx.body = JSON.stringify(responseBody);
});

// add router middleware:
app.use(router.routes());

app.listen(3002)
console.log("demo in run")