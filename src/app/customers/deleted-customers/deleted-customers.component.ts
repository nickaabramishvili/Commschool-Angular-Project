import { Component, OnInit } from '@angular/core';
import { CustomersDataService } from '../../services/customers-data.service';
@Component({
  selector: 'app-deleted-customers',
  templateUrl: './deleted-customers.component.html',
  styleUrls: ['./deleted-customers.component.scss'],
})
export class DeletedCustomersComponent implements OnInit {
  constructor(public CustomersDataService: CustomersDataService) {}

  displayedColumns = this.CustomersDataService.displayedColumns;
  onDeleteRow(i: number) {
    this.CustomersDataService.customersData = [
      ...this.CustomersDataService.deletedCustomersArray.splice(i, 1),
      ...this.CustomersDataService.customersData,
    ];
    this.CustomersDataService.deletedCustomersArray = [
      ...this.CustomersDataService.deletedCustomersArray,
    ];
  }
  ngOnInit(): void {}
}
