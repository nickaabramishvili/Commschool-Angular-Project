import { Component, OnInit, Inject } from '@angular/core';
import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersDataService } from '../../services/customers-data.service';
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
          opacity: 0.1,
          backgroundColor: 'blue',
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
  addCustomerForm: FormGroup;
  public ColoredText = '';
  wholeArr = [...this.CustomersDataService.customersData];
  constructor(
    @Inject('VERSION-NUMBER') public versionNumber: string,
    public CustomersDataService: CustomersDataService
  ) {
    this.addCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      workingYears: new FormControl('', [Validators.required]),
    });
  }
  onInfoDivClick() {
    this.animationTriggered = !this.animationTriggered;
    setTimeout(() => {
      this.infodiv = !this.infodiv;
    }, 1000);
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

  ngOnInit(): void {}
}
