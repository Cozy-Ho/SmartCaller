const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('index page');
});

//user routing
router.use('/user', require('./user/index'));
router.use('/calendar', require('./calendar/index'));

//calendar routing
router.use('/calendar', require('./calendar/index'));


module.exports = router;