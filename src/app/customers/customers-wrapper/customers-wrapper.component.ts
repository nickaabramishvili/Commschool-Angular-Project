import { Component, OnInit, Inject } from '@angular/core';
import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-customers-wrapper',
  templateUrl: './customers-wrapper.component.html',
  styleUrls: ['./customers-wrapper.component.scss'],
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
export class CustomersWrapperComponent implements OnInit {
  infodiv: boolean = false;
  animationTriggered: boolean = false;
  onInfoDivClick() {
    this.animationTriggered = !this.animationTriggered;
    setTimeout(() => {
      this.infodiv = !this.infodiv;
    }, 1000);
  }
  constructor(@Inject('VERSION-NUMBER') public versionNumber: string) {}

  ngOnInit(): void {}
}
