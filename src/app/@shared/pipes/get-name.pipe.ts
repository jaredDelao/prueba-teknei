import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@app/@core/interfaces/login';

type typeValue = 'name' | 'photo';

@Pipe({
  name: 'getName',
})
export class GetNamePipe implements PipeTransform {
  transform(value: string, cat: User[], type: typeValue): string {
    return cat.find((x) => x.id === value)?.[type] ?? '';
  }
}
