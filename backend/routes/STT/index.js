const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('STT index page');
});

//STT routing
router.use('/command', require('./command'));



module.exports = router;