import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../user'
import { SavetasktodbService } from '../../services/savetask/savetasktodb.service';
import { DisplaytasksService } from '../../services/displaytasks/displaytasks.service';
import { RemovetaskService } from '../../services/removetask/removetask.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TasksComponent implements OnInit {


  userModel = new User('','','','','');

  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private savetask: SavetasktodbService,
    private displaytask: DisplaytasksService,
    private remove: RemovetaskService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  updatetaskinfo(userModel){
    //alert(userModel.taskname)
    this.savetask.add(userModel).subscribe((data)=>{
        //alert(data.message);
        //alert('Operation Successful!')
        this.gettasksfromdb();
    });
  }

  removetask(name){
      //alert(name)
      this.remove.remove(name).subscribe((data)=>{
          alert(data.removemessage);
          this.gettasksfromdb();
      });
  }
  listoftasks;

  ngOnInit() {
    this.gettasksfromdb();
  }

  gettasksfromdb(){
    this.displaytask.getdata().subscribe((data)=>{
      this.listoftasks = data;
    });
  }
  open(content) {
    this.modalService.open(content);
  }

  openwin(contentw,i){
    this.modalService.open(contentw);
    this.userModel = new User(i.taskname,i.addtomyday,i.important,i.due,i.addnote);
  }

}
