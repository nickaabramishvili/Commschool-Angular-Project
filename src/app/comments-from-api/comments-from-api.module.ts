import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsForServComponent } from './comments-for-serv/comments-for-serv.component';
import { CommentsForUIComponent } from './comments-for-ui/comments-for-ui.component';
import { CommentsWrapperComponent } from './comments-wrapper/comments-wrapper.component';



@NgModule({
  declarations: [
    CommentsForServComponent,
    CommentsForUIComponent,
    CommentsWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentsFromApiModule { }
