// const express = router('express');
// const router = express.Router();

//This works the same as the code above, it is just a shorthand method.
const router = require('express').Router()
const destinationsCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', destinationsCtrl.create)

module.exports = router;