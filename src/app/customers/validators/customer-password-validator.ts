import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customerPasswordStrength(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumber = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumber;

    return !passwordValid ? { isPasswordInValid: true } : null;
  };
}

// ase gamoiyureba calke sheqmnili vqalidator funqcia igebs da abrunebs im tipebs rac shem,oimportebuli gavqvs , vqminit tesst casebs regex is
// sashvalebit da mere vamowmebt tu yvela sworia da tu araa swor iyvla mashin vareturnebt obieqts da agvcwert rasac gvinda iq ro aris true da tu null bruneba eseigi
// yvelaperi sworia da shemowmeba gaiara ,null roca bruneba nishansv ro yvelaperi ok aris
