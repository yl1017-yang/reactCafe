// https://mygameprogamming.tistory.com/83
// https://velog.io/@dami/Express-%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C-JSON-%ED%98%95%ED%83%9C%EB%A1%9C-%EC%9D%91%EB%8B%B5%ED%95%98%EA%B8%B0
// https://cotak.tistory.com/87
// post json https://codingcoding.tistory.com/497
// api 경로 https://dev.to/ericchapman/nodejs-express-part-2-route-parameters-ea3

const express = require('express');
const router = express.Router();

const fs = require('fs');
const boardData = JSON.parse(fs.readFileSync('./router/boardData.json', 'utf8'));
//const boardData = require('./boardData.json');

router.get('/', (req, res, next) => {
  res.json(boardData)

  // res.sendFile(__dirname + '/boardData.json', (err) => {
  //   if (err) {
  //     res.sendStatus(400);
  //   } else {
  //     console.log('sanding completed');
  //   }
  // })
});

router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id)
  const post = boardData.find(post => post.id === id)

  if (!post) {
    return res.status(404).send('post not found')
  }
  res.json(post)
});

router.post('/', (req, res) => {
  if (req.body) {
    res.setHeader('Content-Type', 'application/json');
    return res.json(boardData);
  }
  return res.send('성공');
});

module.exports = router;