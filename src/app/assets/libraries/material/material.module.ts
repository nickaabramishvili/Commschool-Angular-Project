import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
})
export class MaterialModule {}
