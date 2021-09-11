import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { MyPostsComponent } from './my-posts.component';

const routes: Routes = [Shell.childRoutes([{ path: 'posts', component: MyPostsComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPostsRoutingModule {}
