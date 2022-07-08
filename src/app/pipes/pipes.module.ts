import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTransformPipe } from './custom-transform.pipe';

@NgModule({
  declarations: [CustomTransformPipe],
  imports: [CommonModule],
  exports: [CustomTransformPipe],
})
export class PipesModule {}
