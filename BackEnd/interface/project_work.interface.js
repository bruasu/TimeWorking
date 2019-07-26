class Project_work{
    constructor(){
        this.id_project_work;
        this.name;
        this.data_insert;
    }
    setProject_work(data){
        if(data.id_project_work){
            this.id_project_work = data.id_project_work;
        }
        if(data.name){
            this.name = data.name;
        }
        if(data.data_insert){
            this.data_insert = data.data_insert;
        }
    }
}

module.exports = Project_work;