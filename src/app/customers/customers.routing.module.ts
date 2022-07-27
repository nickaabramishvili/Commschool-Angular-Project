import { Routes } from '@angular/router';
import { ActiveCustomersComponent } from './active-customers/active-customers.component';
import { CustomersWrapperComponent } from './customers-wrapper/customers-wrapper.component';
import { DeletedCustomersComponent } from './deleted-customers/deleted-customers.component';

export const routes: Routes = [
  { path: '', component: CustomersWrapperComponent },
  { path: 'active-customers', component: ActiveCustomersComponent },
  { path: 'deleted-customers', component: DeletedCustomersComponent },
];
// lazyloadingistvis shevqmeni routebi da exla es routebi udan shevides am tavis modulshi routebad
