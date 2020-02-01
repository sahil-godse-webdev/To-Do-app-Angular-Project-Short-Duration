import { Injectable } from '@angular/core';
import { User } from '../../user'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavetasktodbService {

  constructor(private http:HttpClient) { }

  public add(userModel){
    let taskname= userModel.taskname;
    let addtomyday= userModel.addtomyday;
    let important= userModel.important;
    let due= userModel.due;
    let addnote= userModel.addnote;

    return this.http.get('http://localhost/todoapp/savetask.php?taskname='
      +taskname+'&addtomyday='
      +addtomyday+'&important='
      +important+'&due='
      +due+'&addnote='
      +addnote
    );
  }
}
