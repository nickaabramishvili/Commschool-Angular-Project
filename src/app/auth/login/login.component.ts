import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisteredUserCheckService } from 'src/app/shared/registered-user-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean;

  firstName: string = '';
  password: string = '';

  constructor(private registeredUserCheck: RegisteredUserCheckService) {
    this.hide = true;

    this.loginForm = new FormGroup({
      firstName: new FormControl('firstName', [Validators.required]),
      password: new FormControl('password', [Validators.required]),
    });
  }
  login() {
    if (this.registeredUserCheck.login(this.firstName, this.password)) {
    }
    return;
  }
  onSubmit() {
    console.log(this.loginForm.status);
  }

  ngOnInit(): void {}
}
// this.registeredUserCheck.user.firstName;
// this.registeredUserCheck.user.password;
