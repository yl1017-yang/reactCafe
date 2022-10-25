const express = require('express');
const router = express.Router();

// response - json 데이터 보내기
router.get('/', function(req, res, next) {
  const result = 'http://localhost:5000/usersData';
  res.json(result);
});

// request - json 데이터 받기
router.post('/', function(req, res, next) {
  console.log(req.body);
  const result = req.body;
  res.send(result);
});

module.exports = router;