const express = require('express');
// const cors = require('cors');
const app = express();
// const bodyParser = require('body-parser');  // 최신버전에서는 express가 body-parser를 포함

//패스 지정용 모듈
const path = require('path');

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 추가적인 배열을 받아올 수 있음

// app.set('data', []);

const indexRouter  = require('./router/index');
const usersRouter = require('./router/users');
const boardRouter = require('./router/board');

app.use('/', indexRouter);
app.use('/api', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);

//요청파일 루팅
app.use(express.static(path.join(__dirname, 'public')));
// 요청파일 루팅 설명 https://codingcoding.tistory.com/560

// 404 Error Handling
app.use(function(req, res, next) {
  res.status(404).send('404 Sorry cant find that!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('500 Something broke!');
});

const port = process.env.PORT || 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

// https://millo-l.github.io/Nodejs-express-router-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/
// body-parser 설치: https://fierycoding.tistory.com/20