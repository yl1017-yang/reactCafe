const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  // res.send({ test: "node server 5000" });
  res.send('server root');
});

module.exports = router;