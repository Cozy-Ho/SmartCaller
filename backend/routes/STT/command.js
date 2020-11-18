const express = require('express');
const router = express.Router();
const commands = require('../../src/commands')
//얼굴 인식 후 회원 로그인 
router.post('/', (req, res) =>{
    console.log('<<command>>');
    var command = req.body.command
    command = command.replace(/(\s*)/g, "");
    //스마트켈러 스마트캘러 일정등록 일정수정 일정삭제 명령어리스트 
    //일정 보여줘 일정 등록해줘 일정 수정해줘 일정 삭제해줘
    if(command == "스마트켈러" || command =="스마트캘러"){
        commands.comp_command_list(req,res)
    }
    else if(command == "일정보여줘"|| command == "일정"){
        commands.comp_cal(req,res)
    }
    else if(command == "일정등록해줘" || command == "일정등록헤줘" || command == "일정등록"){
        commands.comp_regist(req,res)
    }
    else if(command == "일정수정해줘" || command == "일정수정헤줘" || command == "일정수정"){
        commands.comp_edit(req,res)  
    }
    else if(command == "일정삭제해줘" || command == "일정삭제헤줘" || command == "일정삭제" ){
        commands.comp_delete(req,res)  
    }
    else if(command == "취소해줘" || command == " 취소헤줘" || command == " 취소"){
        commands.cancel(req,res)  
    }
    else{
        res.json({
            "result": "false",
            "command": command
        })
    }
});
module.exports = router;