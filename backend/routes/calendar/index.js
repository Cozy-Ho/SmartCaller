const express = require('express');
const router = express.Router();
const calendar = require('../../src/calendar')

router.get('/', function(req, res, next) {
    res.send('index page');
});

//user routing
router.use('/info', calendar.calendar_info);
router.use('/schedule_info', calendar.schedule_info)
router.use('/schedule_regist',  calendar.schedule_regist);
router.use('/schedule_edit',  calendar.schedule_edit);
router.use('/schedule_delete',  calendar.schedule_delete);


module.exports = router;
