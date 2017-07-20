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

router.post('/', function(req, res, next) {
  queries.create({
    name: req.body.name,
    aisle: req.body.aisle,
    photo_url: req.body.photo_url
  }).then(function(result) {
    res.json(result);
  });
});
module.exports = router
