const { Router } = require('express');
const router = Router();
const Time_working = require('../model/time_working.model');

router.get('/:value', (req, res) => {
const time_working = new Time_working();
const value = req.params.value;

if(value == "checkOpen"){
    time_working.checkOpenTimeWorking((err, rows, fields) => {
        if(rows){
            res.json(rows[0]);
        }else{
            res.status(400).json(err);
        }
    });
}
if(value == "dashboard"){
    let date = {};
    let countSearch = 0;
    let countAll = 8;

    time_working.getCountWorkAll((err, rows, fields) => {
        if(rows){
            date.countAll = rows[0].countAll;
            countSearch ++;
            verification();
        }
    });
    time_working.getCountWorkDay((err, rows, fields) =>{
        if(rows){
            date.countDay = rows[0].countDay;
            countSearch ++;
            verification();
        }
    });
    time_working.getTimeAll_Second((err, rows, fields) => {
        if(rows){
            date.AllTime_Second = rows[0].time;
            countSearch ++;
            verification();
        }
    });
    time_working.getTimeWorkingAndStudentsDay_Second((err, rows, fields) => {
        if(rows){
            if(rows[0].time == null){
                date.AllTimeDay_Second = 0;
            }else{
                date.AllTimeDay_Second = rows[0].time;
            }
            countSearch ++;
            verification();
        }
    });
    time_working.getTimeStudentsAll_Second((err, rows, fields) =>{
        if(rows){
            date.AllTimeStundent_Second = rows[0].time;
            countSearch ++;
            verification();
        }
    });
    time_working.getTimeWorkingAll_Second((err, rows, fields) => {
        if(rows){
            date.AllTimeWorking_Second = rows[0].time;
            countSearch ++;
            verification();
        }
    });
    time_working.getTimeWorkingDay_Second((err, rows, fields) => {
        if(rows){
            if(rows[0].time == null){
                date.AllTimeWorkingDay_Second = 0;
            }else{
                date.AllTimeWorkingDay_Second = rows[0].time;
            }
            countSearch ++;
            verification();
        }
    });
    time_working.getTimeStudentDay_Second((err, rows, fields) => {
        if(rows){
            if(rows[0].time == null){
                date.AllTimeStudentDay_Second = 0;
            }else{
                date.AllTimeStudentDay_Second = rows[0].time;
            }
            countSearch ++;
            verification();
        }
    });

    function verification(){
        if(countSearch == countAll){
            res.json(date);
        }
    }
    verification();
}
});

router.post('/', (req, res) => {
    const time_working = new Time_working();
    time_working.setTime_working(req.body);

    time_working.insertTime_working((err, rows, fields) => {
        if(rows){
            if(rows.insertId){
                res.json({
                    insert: true,
                    id_insert: rows.insertId
                });
            }
        }else{
            res.status(400).json(err);
        }
    });

});

router.put('/', (req, res) => {
    const time_working = new Time_working();
    time_working.setTime_working(req.body);
    time_working.updateTime_working((err, rows, fields) => {
        if(rows){
            if(rows.affectedRows == 1){
                res.json({
                    update: true
                });
            }else{
                res.json({
                    update: false
                });
            }
        }else{
            res.status(400).json(err);
        }
    });
});

module.exports = router;