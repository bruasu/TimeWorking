import { Component, OnInit } from '@angular/core';
import { TimeWorkingService } from '../../service/time-working.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTimeSeconds: number;
  allTimePrint: string;

  constructor(
    private ServiceTimeWorking: TimeWorkingService
  ) { }

  ngOnInit() {
    this.getTimeWorkAll();
  }
  getTimeWorkAll(){
    this.ServiceTimeWorking.getTimeWorkingAllSeconds().subscribe((response) => {
      if(response.time){
        this.allTimeSeconds = response.time;

        let ss = this.allTimeSeconds % 60;
        let mm = Math.round((this.allTimeSeconds / 60) % 60);
        let hh = Math.round((this.allTimeSeconds / 60) / 60);
    
        this.allTimePrint = `${hh} : ${mm} : ${ss}`;
      }
    },
    (err) =>{
      console.log(err);
    });

  }

}
