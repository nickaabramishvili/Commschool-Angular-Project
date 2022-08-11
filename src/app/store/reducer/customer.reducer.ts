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
  on(CustomersActions.addCustomers, (state: State, { customer }) => {
    console.log('fired', customer);
    return {
      ...state,
      customers: [...state.customers, customer],
    };
  }),

  on(CustomersActions.testAction, (state: State, { customer }) => {
    console.log('testf', customer);
    return {
      ...state,
      customers: [...state.customers, customer],
    };
  })
);
export function reducer(state = initialState, action: Action): any {
  return CustomerReducer(state, action);
}
