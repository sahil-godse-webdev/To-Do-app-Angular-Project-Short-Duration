import { Component, OnInit } from '@angular/core';
import { User } from '../../user'
import { SavetasktodbService } from '../../services/savetask/savetasktodb.service';
import { DisplaytasksService } from '../../services/displaytasks/displaytasks.service';
import { RemovetaskService } from '../../services/removetask/removetask.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myday',
  templateUrl: './myday.component.html',
  styleUrls: ['./myday.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MydayComponent implements OnInit {

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
        alert(data.message);
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
    this.displaytask.getmydaydata().subscribe((data)=>{
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
