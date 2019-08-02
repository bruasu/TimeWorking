import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANT } from '../Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class TimeWorkingService extends CONSTANT{

  constructor(
    private http: HttpClient
  ) {
    super();
   }

  insertTimeWorking(data: object): Observable<any>{
    return this.http.post(this.SERVER_API+'/api/time_working',data);
  }
  updateTimeWorking(data: object): Observable<any>{
    return this.http.put(this.SERVER_API+'/api/time_working',data);
  }
  checkOpenTimeWorking(): Observable<any>{
    return this.http.get(this.SERVER_API+"/api/time_working/checkOpen");
  }
  getDashboard(): Observable<any>{
    return this.http.get(this.SERVER_API+"/api/time_working/dashboard")
  }
}
