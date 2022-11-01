const express = require('express');
const router = express.Router();

// response - json 데이터 보내기
router.get('/', function(req, res, next) {
  res.send([
    {
      "id": 1,
      "type": "공지사항",
      "userName": "이상화",
      "title": "공지사항 제목입니다.-11",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 2,
      "type": "공지사항",
      "userName": "관리자",
      "title": "공지사항 제목입니다.-22",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 3,
      "type": "-",
      "userName": "관리자",
      "title": "공지사항 제목입니다.-33",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 4,
      "type": "-",
      "userName": "영미",
      "title": "공지사항 제목입니다.-44",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 5,
      "type": "공지사항",
      "userName": "이상화",
      "title": "공지사항 제목입니다.-55",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 6,
      "type": "공지사항",
      "userName": "홍길동",
      "title": "공지사항 제목입니다.-66",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 7,
      "type": "공지사항",
      "userName": "성선화",
      "title": "공지사항 제목입니다.",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 8,
      "type": "공지사항",
      "userName": "이상화",
      "title": "공지사항 제목입니다.",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 9,
      "type": "공지사항",
      "userName": "인쇄",
      "title": "공지사항 제목입니다.",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    },
    {
      "id": 10,
      "type": "-",
      "userName": "인강",
      "title": "공지사항 제목입니다.",
      "desc": "<p>내용입니다.</p>",
      "readCount": 0,
      "fileList": [],
      "date": "2022-12-23 17:54:05.025"
    }
  ]);
});

// request - json 데이터 받기
// router.post('/', function(req, res, next) {
//   console.log(req.body);
//   const result = req.body;
//   res.send(result);
// });

module.exports = router;