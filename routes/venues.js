var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

// INDEX, SHOW ALL
router.get('/', (req, res) => {
    User.find()
    .then((users) => {
        res.render('venues/index', {
            users
        })
        //res.send('users/index', { users })
        //res.render('users/index', { users })
    })
 })

// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
    res.render('venues/new')
  })


// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        res.render('venues/show', { user })
      })
  })

  // EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        res.render('venues/edit', { user })
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