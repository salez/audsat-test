import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)
  },
  {
    path: 'logs',
    loadChildren: () => import('./modules/log/log.module').then(m => m.LogModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
