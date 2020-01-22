import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {paths} from "../../shared/serviceStrings";
import {CommonService} from "../../shared/services/common.service";
import {Router} from "@angular/router";
import {enums} from "../../shared/serviceEnums";

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.scss']
})
export class AddjobComponent implements OnInit {
  addJobForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
              private service: CommonService,
              private router: Router) { }

  ngOnInit() {
    this.addJobForm = this.fb.group({
      title: [ '', Validators.required ],
      description: [ '', Validators.required ]
    });
  }

  /**
   * submit add job form function
   */
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.addJobForm.invalid) {
      return;
    }
    this.service.post(paths.addJob,this.addJobForm.value,enums.job).subscribe((res: any) => {
      if (res.id) {
        this.router.navigateByUrl("/jobs");
    }
    });
  }

}
