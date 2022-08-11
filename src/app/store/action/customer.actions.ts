import { createAction, props } from '@ngrx/store';
import { Customer } from '../../shared/models/customer.model';
export const addCustomers = createAction(
  '[Customer] Add Customers',
  (customer: Customer) => ({ customer })
);

export const testAction = createAction(
  '[Customer] Add test action',
  (customer: Customer) => ({ customer })
);
