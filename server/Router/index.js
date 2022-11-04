const express = require('express');
const router = express.Router();

//https://zel0rd.tistory.com/149

router.get('/', (req, res)=>{
  // res.send({ test: "node server 5000" });
  res.send(`
  <form action="/" method="post">
      email : <input type="text" name="email" /> <br />
      name : <input type="text" name="name" /> <br />
      password : <input type="text" name="password" /> <br />
      <input type="submit">
  </form>
  `)
});

router.post('/', (req,res)=> {
  var body = req.body;
  var name = body.name;
  var email = body.email;

  res.send(`Hi ${name}, your email is ${email} / body ${body}`)
})

module.exports = router;