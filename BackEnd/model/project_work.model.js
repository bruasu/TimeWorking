const Project_work = require('../interface/project_work.interface');

class work extends Project_work{
    constructor(){
        super();
        this.mysqlConnection = require('../data/database');
    }
    insertProject_work(fun){
        let query = "INSERT INTO projects_work (name) VALUES (?)";
        this.mysqlConnection.query(query, [this.name], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectProject_work(fun){
        let query = "SELECT * FROM projects_work";
        this.mysqlConnection.query(query, (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    updateProject_work(fun){
        let query = "UPDATE projects_work SET name = ? WHERE id_project_work = ?";
        this.mysqlConnection.query(query, [this.name, this.id_project_work], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    deleteProject_work(fun){
        let query = "DELETE FROM projects_work WHERE id_project_work = ?";
        this.mysqlConnection.query(query,[this.id_project_work], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }


}

module.exports = work;