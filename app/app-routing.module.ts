import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { MydayComponent } from './components/myday/myday.component';
import { ImportantComponent } from './components/important/important.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'myday', component: MydayComponent},
  {path: 'important', component: ImportantComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
