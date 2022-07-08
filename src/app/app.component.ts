import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  infodiv: boolean = false;
  onInfoDivClick() {
    setTimeout(() => {
      this.infodiv = !this.infodiv;
    }, 1000);
  }
  title = 'Commschool-Angular-Project';
}
