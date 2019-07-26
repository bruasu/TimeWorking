export interface TimeWorkingInterface {
    id_time_working?: string;
    date_init?: string;
    date_finish?: string;
    observation?: string;
    
    type_work_id_type_work: number;
    projects_work_id_project_work: number;

    name_type_work: string;
    name_project_work: string;
}