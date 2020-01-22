import { Component, OnInit } from '@angular/core';
import {paths} from "../shared/serviceStrings";
import {CommonService} from "../shared/services/common.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobsList;
  constructor(private service: CommonService) {
    this.service.get(paths.jobslist).subscribe(data=> {
      this.jobsList = data.data;
    });

  }

  ngOnInit() {
  }

}
