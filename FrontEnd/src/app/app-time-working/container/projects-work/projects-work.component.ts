import { Component, OnInit } from '@angular/core';
import { ProjectWorkService } from 'src/app/app-time-working/service/project-work.service';
import { ProjectWorkInterface } from '../../interface/project-work-interface';

@Component({
  selector: 'app-projects-work',
  templateUrl: './projects-work.component.html',
  styleUrls: ['./projects-work.component.css']
})
export class ProjectsWorkComponent implements OnInit {
  
  name: string;
  nameEdit: string;

  projects_works:object;
  project_work: ProjectWorkInterface;

  viewList = true;
  viewEdit = false;
  viewDelete = false;

  constructor(
    private ServiceProject_work: ProjectWorkService
  ) { }

  ngOnInit() {
    this.updateListProjectWork();
  }
  updateListProjectWork(){
    this.ServiceProject_work.selectProjectWork().subscribe((response) => {
      if(response){
        this.projects_works = response;
      }
    },
    (err) => {
      console.log(err);
    });
  }
  eventClickInsert(){
    this.ServiceProject_work.insertProjectWork(this.name).subscribe((response) => {
      if(response.insert){
        this.updateListProjectWork();
        this.name = '';
      }
    },
    (err) =>{
      console.log(err);
    });
  }
  deleteProjectWork(){
    this.ServiceProject_work.deleteProjectWork(parseInt(this.project_work.id_project_work)).subscribe((response) => {
      if(response.delete){
        this.updateListProjectWork();
        this.viewListEventClick();
      }
    },
    (err) =>{
      console.log(err);
    });
  }
  updateProjectWork(){
    let data = this.project_work;
    data.name = this.nameEdit;

   this.ServiceProject_work.updateProjectWork(data).subscribe((response) => {
    if(response){
      this.viewListEventClick();
    }
   },
   (err) => {
    console.log();
   });
  }
  eventClickEdit(project_work){
    this.viewEdit = true;
    this.viewList = false;
    this.project_work = project_work;
  }
  eventClickDelete(project_work){
    this.viewDelete = true;
    this.viewList = false;
    this.project_work = project_work ;
  }
  viewListEventClick(){
    this.viewEdit = false;
    this.viewDelete = false;
    this.viewList = true;
  }


}
