const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  console.log('Facebook auth route');
});

module.exports = router;
