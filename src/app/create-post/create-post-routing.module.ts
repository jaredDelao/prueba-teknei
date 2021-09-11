import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { CreatePostComponent } from './create-post.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'create-post', component: CreatePostComponent, data: { title: marker('create') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePostRoutingModule {}
