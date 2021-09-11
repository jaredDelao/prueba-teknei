import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post.component';
import { CreatePostRoutingModule } from './create-post-routing.module';

@NgModule({
  declarations: [CreatePostComponent],
  imports: [CommonModule, CreatePostRoutingModule, TranslateModule, SharedModule, IonicModule, ReactiveFormsModule],
})
export class CreatePostModule {}
