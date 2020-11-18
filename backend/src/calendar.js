const { Calendar } = require("../models");
require('date-utils')
exports.calendar_info = (req, res) => {
  console.log("<<calendar/info>>");

  try {
    Calendar.findAll()
      .then((calendar_info) => {
        res.json({ result: "ok", "calendar_info": calendar_info });
      })
      .catch(() => {
        res.json({ result: "fail" });
      });
  } catch (error) {
    console.error(error);
  }
};
exports.schedule_info = (req, res) => {
  console.log("<<schedule_info>>");
  var date = req.body.date
  edit_date = date.replace(/(\s*)/g, "");
  try {
    Calendar.findAll({
      where: {
        date: edit_date,
      },
    })
      .then((schedule_info) => {
        res.json({ result: "ok", "schedule_info": schedule_info });
      })
      .catch(() => {
        res.json({ result: "fail" });
      });
  } catch (error) {
    console.error(error);
  }
};

exports.schedule_regist = (req, res) => {
  console.log("<<schedule/regist>>");
  console.log(req.body);
  Calendar.create({
    title: req.body.title,
    contents: req.body.contents,
    date: req.body.date,
    time: req.body.time,
  })
    .then(() => {
      //console.log(result)
      res.send(true);
    })
    .catch(() => {
      //console.log(error)
      res.send(false);
    });
};
exports.schedule_edit = (req, res) => {
  console.log("<<schedule_edit>>");
  console.log(req.body)
  Calendar.update(
    {
      title: req.body.title,
      contents: req.body.contents,
      date: req.body.date,
      time: req.body.time,
    },
    { where: { id: req.body.id } }
  )
    .then((r) => {
      console.log(r)
      res.send(true);
    })
    .catch((err) => {
      console.log(err)
      res.send(false);
    });
};
exports.schedule_delete = (req, res) => {
  console.log("<<schedule/delete>>");
  Calendar.destroy({
    where: {
      title: req.body.title,
      date : req.body.date
    }
  })
  .then(() => {
    res.send(true);
  })
  .catch(() => {
    res.send(false);
  });
};
exports.schedule_today = (req, res) => {
  console.log("<<schedule/today>>");
  var today = new Date();
  var date = today.getMonth()+1 + "월" + today.getDate()+ "일"; 
  try {
    Calendar.findAll({
      where: {
        date: date,
      },
    })
      .then((schedule_today) => {
        res.json({ result: "ok", "schedule_today": schedule_today });
      })
      .catch(() => {
        res.json({ result: "fail" });
      });
  } catch (error) {
    console.error(error);
  }
};
function date_change(text){
  return text.replace(/(\s*)/g, "");
}
exports.schedule_id = (req, res) => {
  console.log("<<schedule/id>>");

  var date = req.body.date
  edit_date = date.replace(/(\s*)/g, "");
  try {
    Calendar.findOne({
      where: {
        title : req.body.title,
        date : edit_date
      },
    })
      .then((schedule_info) => {
        console.log(schedule_info)
        res.json({ result: "ok", "schedule_info": schedule_info });
      })
      .catch(() => {
        res.json({ result: "fail" });
      });
  } catch (error) {
    console.error(error);
  }
};

