var express = require('express');
var router = express.Router({
  mergeParams: true
});
const { User } = require('../db/schema')

// INDEX, SHOW ALL
router.get('/', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      const venues = user.venues
      res.render('venues/{{user.id}}/index', {
        venues
      })
    })
})

// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
  res.render('venues/new')
})


// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
  Venues.findById(req.params.id)
    .then((venues) => {
      res.render('venues/show', {
        venue
      })
    })
})

// EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
  Venues.findById(req.params.id)
    .then((venues) => {
      res.render('venues/edit', {
        venue
      })
    })
})

// CREATE
router.post('/', (req, res) => {
  // const newUser = new User(req.body)
  // newUser.save()
  User.create(req.body)
    .then((user) => {
      res.redirect(`/venues/${venue._id}`)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((venue) => {
      res.redirect(`/venues/${venue._id}`)
    })
})

// DELETE
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/venues')
    })
})

module.exports = router;