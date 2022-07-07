import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatTableModule, MatButtonModule, MatInputModule],
  exports: [MatTableModule, MatButtonModule, MatInputModule],
})
export class MaterialModule {}
