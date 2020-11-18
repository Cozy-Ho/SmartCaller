const express = require('express');
const router = express.Router();
const fs = require('fs');

///얼굴인식 후 사진 데이터 받아서 DB에 저장???//
///DB에 사진 경로를 넣고 사진파일은 서버에 따로 저장
const { User } = require('../../models');
router.post('/', (req, res) =>{
    console.log('<<user/regist>>');
    image_path = "./user_images/"+req.body.id //폴더 생성 위치(상대경로 기준이 app파일 위치)
    User.create({
        id : req.body.id,
        path : image_path
    }).then(() => {
        fs.mkdirSync(image_path, { recursive: true })
        res.send(true);
    }).catch(()=>{
        res.send(false); 
    });

});

module.exports = router;
