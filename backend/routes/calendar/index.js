const express = require('express');
const router = express.Router();
const calendar = require('../../src/calendar')

router.get('/', function(req, res, next) {
    res.send('index page');
});

//user routing
router.get('/info', calendar.calendar_info);
router.post('/schedule_info', calendar.schedule_info)
router.post('/schedule_regist',  calendar.schedule_regist);
router.post('/schedule_edit',  calendar.schedule_edit);
router.post('/schedule_delete',  calendar.schedule_delete);
router.get('/schedule_today',  calendar.schedule_today);
router.post('/schedule_id',  calendar.schedule_id);

module.exports = router;
