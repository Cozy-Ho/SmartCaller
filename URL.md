## 반환형식
|Funcion              |URL                  |Get / Post|Argument                                                |Result                                                          |
|:-------------------:|:----------------------:|:---:|:--------------------------------------------------------:|:--------------------------------------------------------------:|
|User regist          |user/regist             |post |{"user_id"}                                               |Success : true, fail : false                                    |
|User login           |user/login              |post |{"user_id"}                                               |Success : true, fail : false                                    |
|Calendar info        |calendar/info           |get  |{""}                                                      |Success : {result:"ok","calendar_info" : calendar_info}         |
|Schedule info(detail)|calendar/schedule_info  |get  |{"date"}                                           |Success : {result:"ok","schedule_info" : schedule_info}         |
|Schedule regist      |calendar/schedule_regist|post |{title, contents, date, time}                             |Success : {result:true}, fail : {result:false}                  |
|Schedule edit        |calendar/schedule_edit  |post |{title, contents, date, time}                             |Success : {result:true}, fail : {result:false}                  |
|Schedule delete      |calendar/schedule_delete|post |{title, date}                                             |Success : true, fail : false                                    |
|Schedule list(today) |calendar/schedule_today |get  |{""}                                                      |Success : {result:"ok","schedule_today" : schedule_today}        
|Schedule edit(id)    |calendar/schedule_id    |post  |{title, date}                                      |Success : {result:"ok","schedule_info" : schedule_info}    |
