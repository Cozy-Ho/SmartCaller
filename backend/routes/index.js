const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname),'../public', 'index.html');
});

//user routing
router.use('/user', require('./user/index'));

//calendar routing
router.use('/calendar', require('./calendar/index'));

router.use('/STT', require('./STT/index'));


module.exports = router;