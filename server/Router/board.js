// https://mygameprogamming.tistory.com/83
// https://velog.io/@dami/Express-%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C-JSON-%ED%98%95%ED%83%9C%EB%A1%9C-%EC%9D%91%EB%8B%B5%ED%95%98%EA%B8%B0
// https://cotak.tistory.com/87
// post json https://codingcoding.tistory.com/497
// 코딩애플 https://codingapple.com/forums/topic/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-axios-post-%EC%9A%94%EC%B2%AD/

const express = require('express');
const router = express.Router();

const fs = require('fs');
const boardData = JSON.parse(fs.readFileSync('./router/boardData.json', 'utf8'));
// const boardData = require('./boardData.json');

router.get('/', (req, res, next) => {
  res.json(boardData);

  // res.sendFile(__dirname + '/boardData.json', (err) => {
  //   if (err) {
  //     res.sendStatus(400);
  //   } else {
  //     console.log('sanding completed');
  //   }
  // })
});

router.post('/', (req, res, next) => {
  const paramId = req.body || req.query;
  boardData.push(paramId);
  res.json(boardData);
  return res.send('success')
});

module.exports = router;