import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('componentLoading', [
      state(
        'notLoaded',
        style({
          width: '0%',
          opacity: 0,
          backgroundColor: 'white',
        })
      ),
      state(
        'loaded',
        style({
          width: '100%',
          opacity: 1,
          backgroundColor: 'green',
        })
      ),
      transition('notLoaded => loaded', [animate('1s')]),
      transition('loaded => notLoaded', [animate('1s')]),
    ]),
  ],
})
export class AppComponent {
  infodiv: boolean = false;
  animationTriggered: boolean = false;
  onInfoDivClick() {
    this.animationTriggered = !this.animationTriggered;
    setTimeout(() => {
      this.infodiv = !this.infodiv;
    }, 1000);
  }

  title = 'Commschool-Angular-Project';
}
