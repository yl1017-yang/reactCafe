const express = require('express');
const router = express.Router();

const userData = require('./usersData.json');

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


router.get('/', (req, res, next) => {
  // res.json(req.query);
  res.json(userData)
});

router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id)
  const post = boardData.find(post => post.id === id)

  if (!post) {
    return res.status(404).send('post not found : sever')
  }
  res.json(post)
});

router.post('/', (req, res, next) => {
  const nameAry = ['id', 'name', 'address', 'phone', 'company'];
    failed = nameAry.some(v => !req.body[v]);

  if (failed) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200); 
  }
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id)
  const post = boardData.find(post => post.id === id)

  if (!post) {
    return res.status(404).send('put not found : sever')
  }
  id.name = req.body.name;
  res.json(post)
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  const post = boardData.find(post => post.id === id)

  if (!post) {
    return res.status(404).send('delete not found : sever')
  }
  
  const index = post.indexOf(course);
  post.splice(index, 1);

  res.json(post)
});


module.exports = router;