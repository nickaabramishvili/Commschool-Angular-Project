import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  infodiv: boolean = false;
  onInfoDivClick() {
    this.infodiv = !this.infodiv;
  }
  title = 'Commschool-Angular-Project';
}
