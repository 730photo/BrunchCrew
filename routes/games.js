var express = require('express');
var router = express.Router({
  mergeParams: true
});
const { Games } = require('../db/schema')


// INDEX, SHOW ALL
router.get('/', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      const games = user.venues
      res.render('games/index', {
        games
      })
    })
})
