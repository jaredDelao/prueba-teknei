import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgNotFound',
})
export class ImgNotFoundPipe implements PipeTransform {
  transform(urlImg: string, customURL = 'assets/img-dummy.png'): string {
    if (!urlImg) return customURL;
    return urlImg;
  }
}
