import { Component, OnInit } from '@angular/core';
import { CustomersDataService } from '../../services/customers-data.service';
@Component({
  selector: 'app-deleted-customers',
  templateUrl: './deleted-customers.component.html',
  styleUrls: ['./deleted-customers.component.scss'],
})
export class DeletedCustomersComponent implements OnInit {
  constructor(private CustomersDataService: CustomersDataService) {}
  dataSource = this.CustomersDataService.deletedCustomersArray;
  displayedColumns = this.CustomersDataService.displayedColumns;
  ngOnInit(): void {}
}
