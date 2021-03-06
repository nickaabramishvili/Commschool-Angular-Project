import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsWrapperComponent } from './comments-from-api/comments-wrapper/comments-wrapper.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CanAccessToCustomersGuard } from './shared/guards/can-access-to-customers.guard';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      // pathmatch shvreba imas ro zustad daemtxveas '' s anu slash is mere  sicarieles da mag shemtxvevashi redirect gagviketos marto ise ara
      { path: 'login', component: LoginComponent },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module').then((m) => m.CustomersModule),
        canActivate: [CanAccessToCustomersGuard],
        // es aris guard igive service da am obieqts higadaexema am properti valued, abrunebs mag amsivshi trua an false s da an gadava mag routze an vera
      },
      // es chanaweri nishansv lazeymodules laodhildren abrunebs callbakcfunqcias romelic aris import da es aris promise iqida nreslolvedze egreve gadis da igebs thenshi
      // chven modules mere am chven moduleshi gavqvs routingmodule da iqidan vmartavt shiad routebs
      { path: 'posts', component: CommentsWrapperComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
