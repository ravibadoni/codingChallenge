import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {paths} from "../../shared/serviceStrings";
import {CommonService} from "../../shared/services/common.service";
import {Router} from "@angular/router";
import {enums} from "../../shared/serviceEnums";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  addUserForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
              private service: CommonService,
              private router: Router) { }

  ngOnInit() {
    this.addUserForm = this.fb.group({
      name: [ '', Validators.required ],
      dateOfBirth: [ '', Validators.required ],
      email: [ '', [Validators.required, Validators.email] ],
      status: [ '', Validators.required ],
      hourlyRate: [ '', Validators.required ]
    });
  }

  /**
   * submit add job form function
   */
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.addUserForm.invalid) {
      return;
    }
    this.service.post(paths.adduser,this.addUserForm.value, enums.user).subscribe((res: any) => {
      if (res.id) {
        this.router.navigateByUrl("/users");
      }
    });
  }

}
