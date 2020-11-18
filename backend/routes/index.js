const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('index page');
});

//user routing
router.use('/user', require('./user/index'));

//calendar routing
router.use('/calendar', require('./calendar/index'));

router.use('/STT', require('./STT/index'));


module.exports = router;