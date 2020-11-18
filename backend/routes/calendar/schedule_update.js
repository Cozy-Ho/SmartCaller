const express = require('express');
const router = express.Router();

//캘린더 업로드
router.post('/', (req, res) => {
    console.log('<<calendar/upload>>');
    const { Calendar } = require('../../models');
    Calendar.update({ user_id : req.body.user_id,
        title : req.body.title,
        contents : req.body.contents,
        start_time : req.body.start_time,
        end_time : req.body.end_time,
        alarm : req.body.alarm },
         { where: { id: req.body.calendar_id } 
        }).then(result => {
            res.json(result);
        }).catch(err => {
            console.error(err);
        });
});

module.exports = router;
