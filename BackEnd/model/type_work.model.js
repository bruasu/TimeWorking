const Type_work = require('../interface/type_work.interface');

class work extends Type_work{
    constructor(){
        super();
        this.mysqlConnection = require('../data/database');
    }
    insertType_work(fun){
        let query = "INSERT INTO type_work (name) VALUES (?)";
        this.mysqlConnection.query(query, [this.name], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectType_work(fun){
        let query = "SELECT * FROM type_work";
        this.mysqlConnection.query(query, (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    deleteType_work(fun){
        let query = "DELETE FROM type_work WHERE id_type_work = ?";
        this.mysqlConnection.query(query,[this.id_type_work], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    updateType_work(fun){
        let query = "UPDATE type_work SET name = ? WHERE id_type_work = ?";
        this.mysqlConnection.query(query,[this.name, this.id_type_work], (err, rows, fields) => {
            fun(err, rows, fields);
        }); 
    }


}

module.exports = work;