const express = require('express');
const router = express.Router();

// http://localhost:5000/users/foo
router.get('/foo', (req, res, next) => {
  res.sendFile(__dirname + '/usersData.json', (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log('sanding completed');
    }
  })
});


router.get('/bar', (req, res, next) => {
  res.json(req.query);
});

router.post('/bar', (req, res, next) => {
  const nameAry = ['id', 'name', 'address', 'phone', 'company'];
    failed = nameAry.some(v => !req.body[v]);

  if (failed) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200); 
  }
});




module.exports = router;