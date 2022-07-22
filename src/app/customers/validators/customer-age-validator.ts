import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkCustomerAge(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const customerisNoTAdult = value.getFullYear() >= 2014 ? true : false;

    console.log(customerisNoTAdult);
    return customerisNoTAdult ? { userIsNotAdult: true } : null;
  };
}
