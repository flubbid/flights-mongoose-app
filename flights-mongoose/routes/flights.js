var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.post('/', flightsCtrl.create);
router.get('/new', flightsCtrl.new);

module.exports = router;
