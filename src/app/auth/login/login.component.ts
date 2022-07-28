import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisteredUserCheckService } from 'src/app/shared/services/registered-user-check.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean;

  constructor(
    private registeredUserCheck: RegisteredUserCheckService,
    private router: Router
  ) {
    this.hide = true;

    this.loginForm = new FormGroup({
      firstName: new FormControl(this.registeredUserCheck.user.firstName, [
        Validators.required,
      ]),
      password: new FormControl(this.registeredUserCheck.user.password, [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    console.log(this.loginForm.status);
    if (
      this.registeredUserCheck.login(
        this.loginForm.get('firstName')?.value,
        this.loginForm.get('password')?.value
      )
    ) {
      this.registeredUserCheck.userIsLogged = true;
      this.router.navigateByUrl('customers');
    }
    return;
  }

  ngOnInit(): void {}
}
