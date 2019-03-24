import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataDropdown'
})
export class DataDropdownPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const datas = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < value.length; i++) {
      datas.push({
        value: value[i].field,
        label: value[i].header,
      });
    }

    return datas;
  }

}
