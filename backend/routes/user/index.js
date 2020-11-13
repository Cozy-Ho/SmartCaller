const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('index page');
});

//user routing
router.use('/info', require('./info'));
router.use('/regist', require('./regist'));
router.use('/login',  require('./login'));


module.exports = router;
