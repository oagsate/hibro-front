import { Pipe, PipeTransform } from '@angular/core';
import { SelectOpt } from 'src/app/models/index.model';

@Pipe({ name: 'label' })
export class LabelPipe implements PipeTransform {
  transform(
    value: number | undefined,
    arr: SelectOpt[] = []
  ): string | undefined {
    if (typeof value === 'number') {
      return arr.find((e) => e.value === value)?.label;
    } else {
      return '-';
    }
  }
}
