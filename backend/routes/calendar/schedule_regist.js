const express = require('express');
const router = express.Router();

//캘린더 업로드
router.post('/', (req, res) =>{
    console.log('<<calendar/upload>>');
    const { Calendar } = require('../../models');
    Calendar.create({
        user_id : req.body.user_id,
        title : req.body.title,
        contents : req.body.contents,
        start_time : req.body.start_time,
        end_time : req.body.end_time,
        alarm : req.body.alarm
    }).then(() => { 
        res.send(true); 
    }).catch(()=>{
        res.send(false); 
    });
});

module.exports = router;
