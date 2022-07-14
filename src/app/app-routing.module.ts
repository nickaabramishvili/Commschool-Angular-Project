import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsWrapperComponent } from './comments-from-api/comments-wrapper/comments-wrapper.component';
import { CustomersWrapperComponent } from './customers/customers-wrapper/customers-wrapper.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: ' ', component: CustomersWrapperComponent },
      { path: 'posts', component: CommentsWrapperComponent },
      { path: '**', component: CustomersWrapperComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
