import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MydayComponent } from './components/myday/myday.component';
import { ImportantComponent } from './components/important/important.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormsModule }   from '@angular/forms';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SavetasktodbService } from './services/savetask/savetasktodb.service';
import { DisplaytasksService } from './services/displaytasks/displaytasks.service';
import { RemovetaskService } from './services/removetask/removetask.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MydayComponent,
    ImportantComponent,
    TasksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SavetasktodbService,
    DisplaytasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
