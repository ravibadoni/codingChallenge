import { Component, OnInit } from '@angular/core';
import {paths} from "../shared/serviceStrings";
import {CommonService} from "../shared/services/common.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList;
  constructor(private service: CommonService) {
  this.service.get(paths.userslist).subscribe(data=> {
    this.usersList = data.data;
   });

  }

  ngOnInit() {
  }

  deleteRecord(id){
    this.service.delete(paths.deleteUser+`/${id}`).subscribe(data=> {
     if(data){
       location.reload();
     }
    });
  }

}
