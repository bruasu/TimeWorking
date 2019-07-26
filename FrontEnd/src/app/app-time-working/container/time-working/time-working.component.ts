import { Component, OnInit } from '@angular/core';
import { TypeWorkService } from '../../service/type-work.service';
import { ProjectWorkService } from '../../service/project-work.service';
import { TimeWorkingService } from '../../service/time-working.service';
import { TimeWorkingInterface } from '../../interface/time-working-interface';

@Component({
  selector: 'app-time-working',
  templateUrl: './time-working.component.html',
  styleUrls: ['./time-working.component.css']
})
export class TimeWorkingComponent implements OnInit {

  id_type_work:any;
  id_project_work:any;
  observation: string;

  type_works: object;
  projects_works: object;

  openTimeWorking: TimeWorkingInterface;
  viewTimeWorking: boolean;

  hourPrintMS: number;

  cc: number;
  hh: number;
  mm: number;
  ss: number;

  constructor(
    private ServiceType_works: TypeWorkService,
    private ServiceProject_works: ProjectWorkService,
    private ServiceTime_working: TimeWorkingService
  ) { 
  }

  ngOnInit() {
    this.chargeType_works();
    this.chargeProjects_works();
    this.checkOpenTimeWorking();    
  }
  checkOpenTimeWorking(){
    this.ServiceTime_working.checkOpenTimeWorking().subscribe((response) =>{
      if(response){
        this.openTimeWorking = response;
        this.viewTimeWorking = true;
        setInterval(() => {
          this.printHour(new Date(this.openTimeWorking.date_init));
        },1000);
      }else{
        this.viewTimeWorking = false;
      }
    },
    (err) =>{
      console.log(err);
    })
  }
  printHour(date:any){
    let currentdate: any = new Date();
    this.hourPrintMS = currentdate - date;

    let accumulateTime = new Date();
    accumulateTime.setTime(this.hourPrintMS);

    this.cc = Math.round(accumulateTime.getMilliseconds()/10);
    this.hh = accumulateTime.getHours() - 21;
    this.mm = accumulateTime.getMinutes();
    this.ss = accumulateTime.getSeconds();
  }
  chargeType_works(){
    this.ServiceType_works.selectTypeWork().subscribe((response) => {
      this.type_works = response;
    },
    (err) =>{
      console.log(err);
    });
  }
  chargeProjects_works(){
    this.ServiceProject_works.selectProjectWork().subscribe((response) => {
      this.projects_works = response;
    },
    (err) => {
      console.log(err);
    });
  }
  insertTimeWorking(){
    let data ={
      type_work_id_type_work: this.id_type_work,
      projects_work_id_project_work: this.id_project_work,
      observation: this.observation
    }
    this.ServiceTime_working.insertTimeWorking(data).subscribe((response) => {
      if(response.insert){
        this.checkOpenTimeWorking();
      }
    },
    (err) =>{
      if(err.error.code == "ER_BAD_NULL_ERROR"){
        console.log('empty values');      }
    });
  }
  updateTimeWorking(){
    let data = {
      id_time_working: this.openTimeWorking.id_time_working,
      observation: this.observation
    };
    this.ServiceTime_working.updateTimeWorking(data).subscribe((response) => {
      if(response.update){
        this.viewTimeWorking = false;
      }
    }, 
    (err) => {
      console.log(err);
    });
  }

}
