const express = require('express');
const router = express.Router();
const { Calendar } = require('../../models');
//캘린더 정보 전달(calendar/info/)
router.get('/', (req, res) => {
  console.log('<<calendar/info>>');
  try {
    Calendar.find({
      where: {
        user_id: req.qeury.user_id
      }
    }).then((calendar) => {
      res.json({ "result": 'ok', "calendar": calendar });
    }).catch(() => {
      res.json({ "result": 'fail' });
    });
  } catch (error) {
    console.error(error);
  }
});

//캘린더 상제정보 전달(calendar/info/detail/)
router.get('/detail', (req, res) => {
  console.log('<<calendar/info/detail>>');
  try {
    Calendar.find({
      where: {
        user_id: req.qeury.user_id,
        id: req.qeury.calendar_id
      }
    }).then((calendar) => {
      res.json({ "result": 'ok', "calendar": calendar });
    }).catch(() => {
      res.json({ "result": 'fail' });
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;