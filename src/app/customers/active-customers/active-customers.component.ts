import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersDataService } from '../../services/customers-data.service';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.component.html',
  styleUrls: ['./active-customers.component.scss'],
})
export class ActiveCustomersComponent {
  constructor(private CustomersDataService: CustomersDataService) {}
  dataSource = this.CustomersDataService.customersData;
  public ColoredText = '';
  wholeArr = [...this.dataSource];
  deletedCustomersArray = this.CustomersDataService.deletedCustomersArray;
  displayedColumns = this.CustomersDataService.displayedColumns;

  addCustomerForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    workingYears: new FormControl('', [Validators.required]),
  });

  onDeleteRow(i: number) {
    this.deletedCustomersArray.push(...this.dataSource.splice(i, 1));
    this.dataSource = [...this.dataSource];
    console.log(this.deletedCustomersArray);
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
