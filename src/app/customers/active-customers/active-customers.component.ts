import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersDataService } from '../../services/customers-data.service';
import { PeriodicElement } from '../models/customer.model';
@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.component.html',
  styleUrls: ['./active-customers.component.scss'],
  providers: [CustomersDataService],
})
export class ActiveCustomersComponent {
  constructor(private CustomersDataService: CustomersDataService) {
    console.log(this.CustomersDataService.getData());
  }
  ELEMENT_DATA: PeriodicElement[] = this.CustomersDataService.getData();
  dataSource = this.ELEMENT_DATA;
  public ColoredText = '';
  wholeArr = [...this.dataSource];
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'workingYears',
    'delete',
  ];

  addCustomerForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    workingYears: new FormControl('', [Validators.required]),
  });

  onDeleteRow(i: number) {
    this.dataSource.splice(i, 1);
    this.dataSource = [...this.dataSource];
  }

  onAddUser() {
    let newUser = {
      id: this.addCustomerForm.value.id,
      firstName: this.addCustomerForm.value.firstName,
      lastName: this.addCustomerForm.value.lastName,
      workingYears: this.addCustomerForm.value.workingYears,
    };
    if (this.addCustomerForm.valid) {
      this.dataSource.push(newUser);
      this.dataSource = [...this.dataSource];
    }
  }

  onFilterTable() {
    let nameAndLastName = this.ColoredText.split(' ');
    let filteredEl;

    if (nameAndLastName.length < 3 && nameAndLastName[0] != '') {
      for (let i = 0; i < this.dataSource.length; i++) {
        if (
          this.dataSource[i].firstName.includes(nameAndLastName[0]) &&
          this.dataSource[i].lastName.includes(nameAndLastName[1])
        ) {
          filteredEl = this.dataSource[i];
          this.dataSource = [];
          this.dataSource.push(filteredEl);
        }
      }
    } else if (this.ColoredText == '') {
      this.dataSource = [...this.wholeArr];
    }
  }
}
