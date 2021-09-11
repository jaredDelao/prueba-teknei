import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
    { path: 'posts', loadChildren: () => import('./my-posts/my-posts.module').then((m) => m.MyPostsModule) },
    {
      path: 'create-post',
      loadChildren: () => import('./create-post/create-post.module').then((m) => m.CreatePostModule),
    },
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) },
  ]),
  { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
