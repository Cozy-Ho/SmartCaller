const express = require('express');
const router = express.Router();

//얼굴 인식 후 회원 로그인 
router.post('/', (req, res) =>{
    console.log('<<user/login>>');
    const { User } = require('../../models');
    User.find({
        where: {
          id: req.body.user_id
        }
    }).then(() => { 
        res.send(true); 
    }).catch(()=>{
        res.send(false); 
    });
});
module.exports = router;