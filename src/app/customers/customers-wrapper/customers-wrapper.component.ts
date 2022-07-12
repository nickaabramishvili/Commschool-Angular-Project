import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-customers-wrapper',
  templateUrl: './customers-wrapper.component.html',
  styleUrls: ['./customers-wrapper.component.scss'],
})
export class CustomersWrapperComponent implements OnInit {
  constructor(@Inject('VERSION-NUMBER') public versionNumber: string) {}

  ngOnInit(): void {}
}
