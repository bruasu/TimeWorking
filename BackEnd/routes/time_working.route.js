const { Router } = require('express');
const router = Router();
const Time_working = require('../model/time_working.model');

router.get('/:value', (req, res) => {
const time_working = new Time_working();
const value = req.params.value;

if(value == "all"){
    time_working.selectTime_working((err, rows, fields) => {
       if(rows){
           res.json(rows);
       }else{
           res.status(400).json(err);
       }
    });
}
if(value == "checkOpen"){
    time_working.checkOpenTimeWorking((err, rows, fields) => {
        if(rows){
            res.json(rows[0]);
        }else{
            res.status(400).json(err);
        }
    });
}
if(value == "AllTimeSeconds"){
    time_working.getTimeWorkingAll_Second((err, rows, fields) => {
        if(rows){
            res.json(rows[0]);
        }else{
            res.json.status(400).json(err);
        }
    });
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