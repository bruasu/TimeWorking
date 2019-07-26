const Time_working = require('../interface/time_working.interface');

class time_working extends Time_working{
    constructor(){
        super();
        this.mysqlConnection = require('../data/database');
    }
    insertTime_working(fun){
        let query = "INSERT INTO time_working (type_work_id_type_work, projects_work_id_project_work, date_init, observation) VALUES (?, ?, current_timestamp(), ?)";
        this.mysqlConnection.query(query, [this.type_work_id_type_work, this.projects_work_id_project_work, this.observation], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectTime_working(fun){
        let query = "SELECT * FROM time_working";
        this.mysqlConnection.query(query, (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    updateTime_working(fun){
        let query = "UPDATE time_working SET date_finish = current_timestamp(), observation = ? WHERE id_time_working = ?";
        this.mysqlConnection.query(query, [this.observation, this.id_time_working], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    checkOpenTimeWorking(fun){
        let query = "SELECT time_working.*, projects_work.name as name_project_work, type_work.name as name_type_work FROM time_working INNER JOIN projects_work ON projects_work.id_project_work = time_working.projects_work_id_project_work INNER JOIN type_work ON type_work.id_type_work = time_working.type_work_id_type_work where date_finish is null limit 1";
        this.mysqlConnection.query(query, (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    getTimeWorkingAll_Second(fun){
        let query = "SELECT sum(TIMESTAMPDIFF(SECOND, date_init, date_finish)) as time FROM time_working";
        this.mysqlConnection.query(query, (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
}

module.exports = time_working;