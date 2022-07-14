import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCustomersComponent } from './active-customers/active-customers.component';
import { MaterialModule } from '../assets/libraries/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { CustomersWrapperComponent } from './customers-wrapper/customers-wrapper.component';
import { DeletedCustomersComponent } from './deleted-customers/deleted-customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    ActiveCustomersComponent,
    CustomersWrapperComponent,
    DeletedCustomersComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule,
    BrowserAnimationsModule,
  ],
  exports: [ActiveCustomersComponent, CustomersWrapperComponent],
  providers: [
    {
      provide: 'VERSION-NUMBER',
      useFactory: function func() {
        return Math.random();
      },
    },
  ],
})
export class CustomersModule {}
