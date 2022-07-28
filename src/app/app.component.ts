import { Component } from '@angular/core';
import { RegisteredUserCheckService } from './shared/services/registered-user-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Commschool-Angular-Project';

  constructor(public registeredUserCheck: RegisteredUserCheckService) {}
}
