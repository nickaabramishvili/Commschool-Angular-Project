import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCustomersComponent } from './active-customers/active-customers.component';
import { MaterialModule } from '../assets/libraries/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ActiveCustomersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [ActiveCustomersComponent],
})
export class CustomersModule {}
