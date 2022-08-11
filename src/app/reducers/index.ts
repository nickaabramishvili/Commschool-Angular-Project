import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CustomerReducer } from '../store/reducer/customer.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  CustomerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
