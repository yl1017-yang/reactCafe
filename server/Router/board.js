// https://mygameprogamming.tistory.com/83
// https://velog.io/@dami/Express-%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C-JSON-%ED%98%95%ED%83%9C%EB%A1%9C-%EC%9D%91%EB%8B%B5%ED%95%98%EA%B8%B0
// 쿠키세션 https://cotak.tistory.com/87
// post json https://codingcoding.tistory.com/497
// api 경로 https://dev.to/ericchapman/nodejs-express-part-2-route-parameters-ea3
// https://syoung-journey.tistory.com/30

const express = require('express');
const router = express.Router();

const fs = require('fs');
const boardData = JSON.parse(fs.readFileSync('./router/boardData.json', 'utf8'));
//const boardData = require('./boardData.json');

router.post('/', (req, res) => {
  if (req.body) {
    res.setHeader('Content-Type', 'application/json');
    return res.json(boardData);
  }
  return res.send('성공');
});

router.get('/', (req, res) => {
  res.json(boardData)
});

router.get('/:id', (req, res) => {
  const board = boardData.find(c => c.id === parseInt(req.params.id))
  if(!board) res.status(404).send('The course with the given ID was not found - id');
  res.json(board);
});

router.put("/:id", (req, res) => {
  const board = boardData.find(c => c.id === parseInt(req.params.id))
  if(!board) res.status(404).send('The course with the given ID was not found - put');

  board.name = req.body.name;
  res.json(board)
});

router.delete("/:id", (req, res) => {
  const board = boardData.find(c => c.id === parseInt(req.params.id))
  if(!board) res.status(404).send('The course with the given ID was not found - delete');
  
  const index = courses.indexOf(board);
  courses.splice(index, 1);
  res.json(board);
});


module.exports = router;