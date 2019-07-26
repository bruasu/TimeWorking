const { Router } = require('express');
const router = Router();
const Project_work = require('../model/project_work.model');

router.get('/', (req, res) => {
    let project = new Project_work();
    project.selectProject_work((err, rows, fields) => {
        if(rows){           
            res.json(rows);
        }else{
            res.status(400).json(err);
        }
    });
});

router.post('/', (req, res) => {
    let project = new Project_work();
    project.setProject_work(req.body);
    project.insertProject_work((err, rows, fields) => {
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

router.put('/', (req, res) =>{
    let project = new Project_work();
    project.setProject_work(req.body);
    project.updateProject_work((err, rows, fields) =>{
        if(rows){
            if(rows.protocol41){
                res.json({
                    update: true
                });
            }
        }else{
            res.status(400).json(err);
        }
    });

});

router.delete('/:id', (req, res) => {
    let project = new Project_work(); 
    let data ={
        id_project_work: req.params.id
    }
    project.setProject_work(data);
    project.deleteProject_work((err, rows, fields) =>{
        if(rows){
            if(rows.affectedRows == 1){
                res.json({
                    delete: true
                })
            }else{
                res.json({
                    delete: false
                });
            }
        }else{
            res.status(400).json(err);
        }
    });
});

module.exports = router;