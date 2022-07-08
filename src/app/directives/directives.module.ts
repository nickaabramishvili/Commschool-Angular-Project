import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [CustomStyleDirective],
  imports: [CommonModule],
  exports: [CustomStyleDirective],
})
export class DirectivesModule {}
