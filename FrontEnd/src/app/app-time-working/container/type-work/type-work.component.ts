import { Component, OnInit } from '@angular/core';
import { TypeWorkService } from 'src/app/app-time-working/service/type-work.service';
import { TypeWorkInterface } from '../../interface/type-work-interface';

@Component({
  selector: 'app-type-work',
  templateUrl: './type-work.component.html',
  styleUrls: ['./type-work.component.css']
})
export class TypeWorkComponent implements OnInit {

  type_works:object;
  type_work: TypeWorkInterface;

  viewList = true;
  viewEdit = false;
  viewDelete = false;

  name: string;
  nameEdit: string;

  constructor(
    private ServiceType_work: TypeWorkService
  ) { }

  ngOnInit() {
    this.updateListTypeWork();
  }
  updateListTypeWork(){
    this.ServiceType_work.selectTypeWork().subscribe((response) => {
      if(response){
        this.type_works = response;
      }
    },
    (err) => {
      console.log(err);
    });
  }
  eventClickInsert(){
    this.ServiceType_work.insertTypeWork(this.name).subscribe((response) => {
      if(response.insert){
        this.updateListTypeWork();
        this.name = '';
      }
    },
    (err) =>{
      console.log(err);
    });
  }
  deleteTypeWork(){
    this.ServiceType_work.deleteTypeWork(parseInt(this.type_work.id_type_work)).subscribe((response) => {
      if(response.delete){
        this.updateListTypeWork();
        this.viewListEventClick();
      }
    },
    (err) =>{
      console.log(err);
    });
  }
  updateTypeWork(){
    let data = this.type_work;
    data.name = this.nameEdit;

   this.ServiceType_work.updateTypeWork(data).subscribe((response) => {
    if(response){
      this.viewListEventClick();
    }
   },
   (err) => {
    console.log();
   });
  }
  eventClickDelete(type_work){
    this.viewDelete = true;
    this.viewList = false;
    this.type_work = type_work;
  }
  eventClickEdit(type_work){
    this.viewEdit = true;
    this.viewList = false;
    this.type_work = type_work;
  }
  viewListEventClick(){
    this.viewEdit = false;
    this.viewDelete = false;
    this.viewList = true;
  }

}
