import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersDataService } from '../../shared/services/customers-data.service';
import { customerPasswordStrength } from '../validators/customer-password-validator';
import { checkCustomerAge } from '../validators/customer-age-validator';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducer/customer.reducer';
import { addCustomers } from 'src/app/store/action/customer.actions';
import { selectCustomers } from 'src/app/store/selector/customer.selectors';
import { Subject, tap, takeUntil } from 'rxjs';
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
      transition('notLoaded => loaded', [animate('0.1s')]),
      transition('loaded => notLoaded', [animate('0.1s')]),
    ]),
  ],
})
export class CustomersWrapperComponent implements OnInit {
  wholeArr = [...this.CustomersDataService.customersData];
  infodiv: boolean = false;
  animationTriggered: boolean = false;
  addCustomerForm: FormGroup;
  public ColoredText = '';
  isSubmited = false;
  hide = true;
  $destoryed = new Subject<void>();
  constructor(
    @Inject('VERSION-NUMBER') public versionNumber: string,
    public CustomersDataService: CustomersDataService,
    private store: Store<State>
  ) {
    this.addCustomerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      sex: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required, checkCustomerAge()]),
      agreement: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        customerPasswordStrength(),
      ]),
    });
  }

  onInfoDivClick() {
    this.animationTriggered = !this.animationTriggered;
    setTimeout(() => {
      this.infodiv = !this.infodiv;
    }, 100);
  }

  onAddUser() {
    // anu add customer gilakze dacheris shemdeg isSubmited vxdi trues radgan sheecada dasubmitebas,
    // mere agreement tu aris monishnuli da mere formas vamowmeb tu validuria
    this.isSubmited = true;
    if (!this.addCustomerForm.get('agreement')?.value) {
      return;
    }
    if (this.addCustomerForm.valid) {
      // vamowmeb tu carielia anu mainc falsea da tu falsea xo isedac falsea da returnis mere if is shignit raxanaa kods agar gaaagrdzelebs
      // da tu trua mashin agaagrdzelebs da moxdeba yvelaperi chveulebrivad
      let newUser = {
        firstName: this.addCustomerForm.value.firstName,
        lastName: this.addCustomerForm.value.lastName,
        email: this.addCustomerForm.value.email,
        sex: this.addCustomerForm.value.sex,
        birthday: this.addCustomerForm.value.birthday,
        password: this.addCustomerForm.value.password,
      };

      this.CustomersDataService.customersData.push(newUser);
      this.CustomersDataService.customersData = [
        ...this.CustomersDataService.customersData,
      ];

      // vwmindav formas da is submi9tteds vareseteb r oerro mesigebi tyuilad agar gamoitanos,da fromis fieldebs errorebs vashoreb

      this.isSubmited = false;

      this.addCustomerForm.reset();
      // this.addCustomerForm.get('password')?.setErrors(null);

      // Object.keys(this.addCustomerForm.controls).forEach((key) => {
      //   this.addCustomerForm.controls[key].setErrors(null);
      // });
      // vwmindav formas
    }

    // this.store.dispatch(
    //   addCustomers({
    //     firstName: this.addCustomerForm.value.firstName,
    //     lastName: this.addCustomerForm.value.lastName,
    //     email: this.addCustomerForm.value.email,
    //     sex: this.addCustomerForm.value.sex,
    //     birthday: this.addCustomerForm.value.birthday,
    //     password: this.addCustomerForm.value.password,
    //   })
    // );
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

  ngOnInit(): void {
    this.addCustomerForm.get('firstName')?.valueChanges.subscribe((data) => {
      if (data === 'jane') {
        this.addCustomerForm.patchValue({
          lastName: 'doe',
          id: 100,
          email: 'err@gmail.com',
        });
        // meorenairadac formis fieldebis dasetva
        // setvalue itxovs yvela kontrolis(from fieldebis gadacemas) rasac gayavs rangeze
        // this.addCustomerForm.setValue({
        //   lastName: 'doe',
        //   id: 100,
        //   firstName: 'jane',
        //   workingYears: 5,
        // });
        // da mainc range errorze gava
      }
      console.log(data);
    });
    this.store
      .select(selectCustomers)
      .pipe(takeUntil(this.$destoryed))
      .subscribe((res) => {
        console.log(res);
      });
  }
  ngOnDestroy(): void {
    this.$destoryed.next();
    this.$destoryed.complete();
  }
}
