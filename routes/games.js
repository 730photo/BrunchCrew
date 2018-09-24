var express = require('express');
var router = express.Router({
  mergeParams: true
});
const { User } = require('../db/schema')


// INDEX, SHOW ALL
router.get('/', (req, res) => {
  console.log('INDEX', req.params.userId)
  User.findById(req.params.userId)
    .then((user) => {
      const venue = user.venues.id(req.params.venueId)
      res.render('games/index', {
        venue: venue
      })
    })
})

module.exports = router;