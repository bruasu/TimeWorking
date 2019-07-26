const { Router } = require('express');
const router = Router();
const Type_work = require('../model/type_work.model');

router.get('/', (req, res) => {
    let project = new Type_work();
    project.selectType_work((err, rows, fields) => {
        if(rows){           
            res.json(rows);
        }else{
            res.status(400).json(err);
        }
    });
});

router.post('/', (req, res) => {
    let project = new Type_work();
    project.setType_work(req.body);
    project.insertType_work((err, rows, fields) => {
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

router.delete('/:id', (req, res) => {
    let project = new Type_work();
    let data = {
        id_type_work: req.params.id
    }
    project.setType_work(data);
    project.deleteType_work((err, rows, fields) =>{
        if(rows){
            if(rows.protocol41){
                res.json({
                    delete: true
                });
            }
        }else{
            res.status(400).json(err);
        }
    });
});

router.put('/',(req, res) =>{
    let project = new Type_work();
    project.setType_work(req.body);
    project.updateType_work((err, rows, fields) =>{
        if(rows){
            res.json({
                update: true
            });
        }else{
            res.status(400).json(err);
        }
    });
});


module.exports = router;