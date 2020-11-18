const { Calendar } = require("../models");
exports.calendar_info = (req, res) => {
  console.log("<<calendar/info>>");

  try {
    Calendar.find({
      where: {
        user_id: req.qeury.user_id,
      },
    })
      .then((calendar) => {
        res.json({ result: "ok", calendar: calendar });
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

  try {
    Calendar.find({
      where: {
        user_id: req.qeury.user_id,
        id: req.qeury.calendar_id,
      },
    })
      .then((calendar) => {
        res.json({ result: "ok", calendar: calendar });
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

  Calendar.create({
    user_id: req.body.user_id,
    title: req.body.title,
    contents: req.body.contents,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    alarm: req.body.alarm,
  })
    .then(() => {
      res.send(true);
    })
    .catch(() => {
      res.send(false);
    });
};
exports.schedule_edit = (req, res) => {
  console.log("<<schedule_edit>>");
  
  Calendar.update(
    {
      user_id: req.body.user_id,
      title: req.body.title,
      contents: req.body.contents,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      alarm: req.body.alarm,
    },
    { where: { id: req.body.calendar_id } }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
exports.schedule_delete = (req, res) => {
  console.log("<<schedule/delete>>");
  Calendar.destroy({
    where: {
      title: req.body.title,
      start_time : req.body.start_time,
      end_time: req.body.end_time
    }
  })
  .then(result => {
     res.json({});
  })
  .catch(err => {
     console.error(err);
  });
};
