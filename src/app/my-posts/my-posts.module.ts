import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPostsRoutingModule } from './my-posts-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MyPostsComponent } from './my-posts.component';

@NgModule({
  declarations: [MyPostsComponent],
  imports: [CommonModule, MyPostsRoutingModule, TranslateModule, SharedModule, IonicModule, ReactiveFormsModule],
})
export class MyPostsModule {}
