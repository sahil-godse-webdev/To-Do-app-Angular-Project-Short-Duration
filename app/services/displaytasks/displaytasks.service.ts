import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplaytasksService {

  constructor(private http:HttpClient) { }

  gettaskcount(){
    return this.http.get('http://localhost/todoapp/gettaskcount.php');
  }

  getimpcount(){
    return this.http.get('http://localhost/todoapp/getimpcount.php');
  }

  getdata(){
    return this.http.get('http://localhost/todoapp/getdata.php');
  }

  getmydaydata(){
    return this.http.get('http://localhost/todoapp/getmydaydata.php');
  }

  getimp(){
    return this.http.get('http://localhost/todoapp/getimp.php');
  }
}
