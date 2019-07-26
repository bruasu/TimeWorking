import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANT } from '../../app-time-working/Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class TypeWorkService extends CONSTANT {

  constructor(
    private http: HttpClient
    ) {
      super();
   }

  selectTypeWork(): Observable<any>{
    return this.http.get(`${this.SERVER_API}/api/type_work`);
  }
  insertTypeWork(name: string): Observable<any>{
    return this.http.post(this.SERVER_API+'/api/type_work',{name: name});
  }
  deleteTypeWork(id: number): Observable<any>{
    return this.http.delete(this.SERVER_API+'/api/type_work/'+id);
  }
  updateTypeWork(data: object){
    return this.http.put(this.SERVER_API+'/api/type_work', data);
  }
}
