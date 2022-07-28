import { Component, OnInit } from '@angular/core';

import { CustomersDataService } from '../../shared/services/customers-data.service';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.component.html',
  styleUrls: ['./active-customers.component.scss'],
})
export class ActiveCustomersComponent {
  constructor(public CustomersDataService: CustomersDataService) {}

  displayedColumns = this.CustomersDataService.displayedColumns;

  onDeleteRow(i: number) {
    this.CustomersDataService.deletedCustomersArray = [
      ...this.CustomersDataService.deletedCustomersArray,
      ...this.CustomersDataService.customersData.splice(i, 1),
    ];
    this.CustomersDataService.customersData = [
      ...this.CustomersDataService.customersData,
    ];
  }
}
