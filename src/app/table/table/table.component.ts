import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  workingYears: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, firstName: 'eli', lastName: 'metreveli', workingYears: 1 },
  { id: 2, firstName: 'gela', lastName: 'urushadze', workingYears: 2 },
  { id: 3, firstName: 'bela', lastName: 'zoidze', workingYears: 3 },
  { id: 4, firstName: 'lela', lastName: 'abesadze', workingYears: 2 },
  { id: 5, firstName: 'maxo', lastName: 'barabqadze', workingYears: 3 },
  { id: 6, firstName: 'zviadi', lastName: 'gnolidze', workingYears: 5 },
  { id: 7, firstName: 'gio', lastName: 'vardia', workingYears: 7 },
  { id: 8, firstName: 'keta', lastName: 'orashia', workingYears: 14 },
  { id: 9, firstName: 'iosebi', lastName: 'beladze', workingYears: 3 },
  { id: 10, firstName: 'nona', lastName: 'koridze', workingYears: 11 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  dataSource = ELEMENT_DATA;
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
          nameAndLastName[0] === this.dataSource[i].firstName &&
          nameAndLastName[1] === this.dataSource[i].lastName
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
