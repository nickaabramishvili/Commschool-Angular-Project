import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/shared/models/customer.model';
import * as CustomersActions from '../action/customer.actions';
export const customerFeatureKey = 'customer';

export interface State {
  customers: Customer[];
}

export const initialState: State = {
  customers: [],
};

export const CustomerReducer = createReducer(
  initialState,
  on(CustomersActions.addCustomers, (state: State, { customer }) => ({
    ...state,
    customers: [...state.customers, customer],
  }))
);
export function reducer(state: State | undefined, action: Action): any {
  return CustomerReducer(state, action);
}
