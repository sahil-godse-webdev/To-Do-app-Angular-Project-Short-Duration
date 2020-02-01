import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemovetaskService {

  constructor(private http:HttpClient) { }

  remove(name){
    return this.http.get('http://localhost/todoapp/removetask.php?taskname='+name);
  }
}
