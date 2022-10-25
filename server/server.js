const express = require('express');
const app = express();
const indexRouter  = require('./Router/index');
const usersRouter = require('./Router/users');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use('/api', indexRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});