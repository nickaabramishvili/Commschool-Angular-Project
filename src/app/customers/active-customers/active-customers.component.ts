import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersDataService } from '../../services/customers-data.service';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.component.html',
  styleUrls: ['./active-customers.component.scss'],
})
export class ActiveCustomersComponent {
  constructor(public CustomersDataService: CustomersDataService) {}

  public ColoredText = '';
  wholeArr = [...this.CustomersDataService.customersData];

  displayedColumns = this.CustomersDataService.displayedColumns;

  addCustomerForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    workingYears: new FormControl('', [Validators.required]),
  });

  onDeleteRow(i: number) {
    this.CustomersDataService.deletedCustomersArray = [
      ...this.CustomersDataService.deletedCustomersArray,
      ...this.CustomersDataService.customersData.splice(i, 1),
    ];
    this.CustomersDataService.customersData = [
      ...this.CustomersDataService.customersData,
    ];
    console.log(this.CustomersDataService.deletedCustomersArray);
  }

  onAddUser() {
    let newUser = {
      id: this.addCustomerForm.value.id,
      firstName: this.addCustomerForm.value.firstName,
      lastName: this.addCustomerForm.value.lastName,
      workingYears: this.addCustomerForm.value.workingYears,
    };
    if (this.addCustomerForm.valid) {
      this.CustomersDataService.customersData.push(newUser);
      this.CustomersDataService.customersData = [
        ...this.CustomersDataService.customersData,
      ];
    }
  }

  onFilterTable() {
    let nameAndLastName = this.ColoredText.split(' ');
    let filteredEl;

    if (nameAndLastName.length < 3 && nameAndLastName[0] != '') {
      for (let i = 0; i < this.CustomersDataService.customersData.length; i++) {
        if (
          this.CustomersDataService.customersData[i].firstName.includes(
            nameAndLastName[0]
          ) &&
          this.CustomersDataService.customersData[i].lastName.includes(
            nameAndLastName[1]
          )
        ) {
          filteredEl = this.CustomersDataService.customersData[i];
          this.CustomersDataService.customersData = [];
          this.CustomersDataService.customersData.push(filteredEl);
        }
      }
    } else if (this.ColoredText == '') {
      this.CustomersDataService.customersData = [...this.wholeArr];
    }
  }
}
