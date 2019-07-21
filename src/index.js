const Koa = require('koa')
const router = require('./routers/routers');
const bodyParser = require('koa-bodyparser')
const app = new Koa()

//连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', function() {
  console.log('数据库连接成功')
})
db.on('error', console.error.bind(console, 'connection error:'));

// 解析request body
app.use(bodyParser());

// add router middleware:
app.use(router.routes()).use(router.allowedMethods());

app.listen(3002)
console.log("demo in run")