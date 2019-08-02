import { Component, OnInit } from '@angular/core';
import { TimeWorkingService } from '../../service/time-working.service';
import { Dashboard } from '../../interface/dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datas: Dashboard;

  countAll: any;
  countDay: any;
  AllTime: string;
  AllTimeDay: string;
  AllTimeStundent: string;
  AllTimeWorking: string;
  AllTimeWorkingDay: string;
  AllTimeStudentDay: string;

  
  
  constructor(
    private ServiceTimeWorking: TimeWorkingService
  ) { }
  
  ngOnInit() {
    this.getDatasServer();
  }
  setValuesDashboard(){
    this.countAll = this.datas.countAll;
    this.countDay = this.datas.countDay;
    this.AllTime = this.getStringDate(this.datas.AllTime_Second);
    this.AllTimeDay = this.getStringDate(this.datas.AllTimeDay_Second);
    this.AllTimeStundent = this.getStringDate(this.datas.AllTimeStundent_Second);
    this.AllTimeWorking = this.getStringDate(this.datas.AllTimeWorking_Second);
    this.AllTimeWorkingDay = this.getStringDate(this.datas.AllTimeWorkingDay_Second);
    this.AllTimeStudentDay = this.getStringDate(this.datas.AllTimeStudentDay_Second);
    
  }
  getDatasServer(){
    this.ServiceTimeWorking.getDashboard().subscribe((response) =>{
      this.datas = response;
      this.setValuesDashboard();
    },
    (err) =>{
      console.log(err);
    });

  }
  getStringDate(TimeSecond: number){

      let ss = TimeSecond % 60;
      let mm = Math.round((TimeSecond / 60) % 60);
      let hh = Math.round((TimeSecond / 60) / 60);

      return `${hh} : ${mm} : ${ss}`;
  }
}
