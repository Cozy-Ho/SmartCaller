const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('index page');
});

//user routing
router.use('/info', require('./info'));
router.use('/schedule_regist',  require('./schedule_regist'));
router.use('/schedule_update',  require('./schedule_update'));


module.exports = router;
