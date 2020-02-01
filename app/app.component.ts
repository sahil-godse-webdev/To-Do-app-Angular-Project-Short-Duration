import { Component } from '@angular/core';
import { DisplaytasksService } from './services/displaytasks/displaytasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  impcount;

  reload(){
    this.getimpcount();
    this.gettaskcount();
  }

  constructor(private displaytask: DisplaytasksService)
  {}

  ngOnInit() {
    this.getimpcount();
    this.gettaskcount();
  }

    gettaskcount(){
      this.displaytask.gettaskcount().subscribe((data)=>{
        this.taskcount = data.taskcount;
        //console.log(data.impcount)
      });
    }

    getimpcount(){
      this.displaytask.getimpcount().subscribe((data)=>{
        this.impcount = data.impcount;
        //console.log(data.impcount)
      });
    }
}
