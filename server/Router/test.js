const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send({ test: "hi node server 5000" });
});

module.exports = router;