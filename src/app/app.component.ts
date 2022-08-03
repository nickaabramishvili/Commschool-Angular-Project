import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RegisteredUserCheckService } from './shared/services/registered-user-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Commschool-Angular-Project';

  constructor(
    public registeredUserCheck: RegisteredUserCheckService,
    private translateServ: TranslateService
  ) {
    translateServ.setDefaultLang('en');
    translateServ.use('en');
  }
  onChangeLanguage() {
    console.log();
    if (this.translateServ.currentLang === 'en') {
      this.translateServ.use('ka');
    } else {
      this.translateServ.use('en');
    }
  }
}
