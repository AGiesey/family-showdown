import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('login adam');
});

router.get('/next/:input/:output', (req, res, next) => {
  const {input, output} = req.params;
  res.send(`${input} : ${output}`);
})

export default router;