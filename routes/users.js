var express = require('express');
var router = express.Router();



// INDEX, SHOW ALL
router.get('/', (req, res) => {
    User.find()
    .then((users) => {
        res.render('users/index', { users })
    })
})

// NEW, RENDER NEW FORM


// SHOW, SHOW ONE





module.exports = router;
