import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LoaderComponent } from './loader/loader.component';
import { GetNamePipe } from './pipes/get-name.pipe';
import { ImgNotFoundPipe } from './pipes/img-not-found.pipe';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [LoaderComponent, GetNamePipe, ImgNotFoundPipe],
  exports: [LoaderComponent, GetNamePipe, ImgNotFoundPipe],
})
export class SharedModule {}
