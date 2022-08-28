import { Pipe, PipeTransform } from '@angular/core';
import { SelectOpt } from 'src/app/models/index.model';

@Pipe({name: 'label'})
export class LabelPipe implements PipeTransform {
  transform(value: number, arr:SelectOpt[] = []): string|undefined {
    return arr.find(e=>e.value === value)?.label;
  }
}
