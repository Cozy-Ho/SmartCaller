exports.comp_command_list = (req, res) => {
    res.json({
        "result": "ok",
        "comp_command_list" : ["일정 보여줘", "일정 등록해줘", "일정 수정해줘", "일정 삭제해줘"]
    });
}
exports.comp_cal = (req, res) => {
    res.json({
        "result": "ok",
        "comp_cal" : []
    });
}
exports.comp_regist = (req, res) => {
    res.json({
        "result": "ok",
        "comp_regist" : []
    });
}
exports.comp_edit = (req, res) => {
    res.json({
        "result": "ok",
        "comp_edit" : []
    });
}
exports.comp_delete = (req, res) => {
    res.json({
        "result": "ok",
        "comp_delete" : []
    });
}
exports.cancel = (req, res) => {
    res.json({
        "result": "ok",
        "cancel" : []
    });
}