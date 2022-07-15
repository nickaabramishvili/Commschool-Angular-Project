import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
@NgModule({
  imports: [MatTableModule, MatButtonModule, MatInputModule, MatListModule],
  exports: [MatTableModule, MatButtonModule, MatInputModule, MatListModule],
})
export class MaterialModule {}
