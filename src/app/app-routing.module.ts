import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canMatchLoggedIn } from '@core/guard/isLoggedIn.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'posts'
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/login/login.component').then(m => m.LoginComponent)
  },
  {
    path:'admin',
    canMatch: [canMatchLoggedIn],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
