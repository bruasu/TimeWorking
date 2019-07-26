import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANT } from '../Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProjectWorkService extends CONSTANT {

  constructor(
    private http: HttpClient
  ) { 
    super();
  }
  selectProjectWork(): Observable<any>{
    return this.http.get(`${this.SERVER_API}/api/project_work`);
  }
  insertProjectWork(name: string): Observable<any>{
    return this.http.post(this.SERVER_API+'/api/project_work',{name: name});
  }
  deleteProjectWork(id: number): Observable<any>{
    return this.http.delete(this.SERVER_API+'/api/project_work/'+id);
  }
  updateProjectWork(data: object){
    return this.http.put(this.SERVER_API+'/api/project_work', data);
  }
}
