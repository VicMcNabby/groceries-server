const express = require('express');

const router = express.Router();

const queries =  require('../db/queries')

router.get('/', (req,res,next)=>{
  queries.getAll().then(items => {
    res.json(items)
  });
});

router.delete('/:id', (req, res, next)=>{
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router
