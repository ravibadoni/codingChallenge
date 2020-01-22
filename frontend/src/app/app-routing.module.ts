import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {AdduserComponent} from "./users/adduser/adduser.component";
import {AddjobComponent} from "./jobs/addjob/addjob.component";
import {JobsComponent} from "./jobs/jobs.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: AdduserComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'add-jobs', component: AddjobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
