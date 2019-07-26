class Time_working{
    constructor(){
        this.id_time_working;
        this.date_init;
        this.date_finish;
        this.observation;

        this.type_work_id_type_work;
        this.projects_work_id_project_work;

        this.name_type_work;
        this.name_project_work;
    }
    setTime_working(data){
        if(data.id_time_working){
            this.id_time_working = data.id_time_working;
        }
        if(data.date_init){
            this.date_init = data.date_init;
        }
        if(data.date_finish){
            this.date_finish = data.date_finish;
        }
        if(data.observation){
            this.observation = data.observation;
        }
        if(data.type_work_id_type_work){
            this.type_work_id_type_work = data.type_work_id_type_work;
        }
        if(data.projects_work_id_project_work){
            this.projects_work_id_project_work = data.projects_work_id_project_work;
        }
        if(data.name_type_work){
            this.name_type_work = data.name_type_work;
        }
        if(data.name_project_work){
            this.name_project_work = data.name_project_work;
        }
    }
}

module.exports = Time_working;