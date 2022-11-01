const express = require('express');
const router = express.Router();

// response - json 데이터 보내기
router.get('/', function(req, res, next) {
  res.send([
      {
        "id": 1,
        "이름": "이상화",
        "별명": "Bret",
        "이메일": "Sincere@april.biz",
        "휴대폰": "1-770-736-8031 x56442",
        "회사": {
          "이름": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "이름": "홍리나",
        "별명": "Antonette",
        "이메일": "Shanna@melissa.tv",
        "휴대폰": "010-692-6593 x09125",
        "회사": {
          "이름": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "이름": "송혜교",
        "별명": "Samantha",
        "이메일": "Nathan@yesenia.net",
        "휴대폰": "1-463-123-4447",
        "회사": {
          "이름": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
      {
        "id": 4,
        "이름": "현빈",
        "별명": "Karianne",
        "이메일": "Julianne.OConner@kory.org",
        "휴대폰": "493-170-9623 x156",
        "회사": {
          "이름": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity",
          "bs": "transition cutting-edge web services"
        }
      },
      {
        "id": 5,
        "이름": "추자연",
        "별명": "Kamren",
        "이메일": "Lucio_Hettinger@annie.ca",
        "휴대폰": "(254)954-1289",
        "회사": {
          "이름": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        }
      },
      {
        "id": 6,
        "이름": "송강",
        "별명": "Leopoldo_Corkery",
        "이메일": "Karley_Dach@jasper.info",
        "휴대폰": "1-477-935-8478 x6430",
        "회사": {
          "이름": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        }
      },
      {
        "id": 7,
        "이름": "김고은",
        "별명": "Elwyn.Skiles",
        "이메일": "Telly.Hoeger@billy.biz",
        "휴대폰": "210.067.6132",
        "회사": {
          "이름": "Johns Group",
          "catchPhrase": "Configurable multimedia task-force",
          "bs": "generate enterprise e-tailers"
        }
      },
      {
        "id": 8,
        "이름": "김철수",
        "별명": "Maxime_Nienow",
        "이메일": "Sherwood@rosamond.me",
        "휴대폰": "586.493.6943 x140",
        "회사": {
          "이름": "Abernathy Group",
          "catchPhrase": "Implemented secondary concept",
          "bs": "e-enable extensible e-tailers"
        }
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