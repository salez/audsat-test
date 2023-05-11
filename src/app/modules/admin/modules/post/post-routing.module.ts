import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostHistoryComponent } from './components/post-history/post-history.component';

const routes: Routes = [
  {
    path: 'user/:userId',
    component: PostHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
