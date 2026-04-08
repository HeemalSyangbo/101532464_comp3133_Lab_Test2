import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'launchStatus'
})
export class LaunchStatusPipe implements PipeTransform {
  transform(value: boolean | null): string {
    if (value === true) {
      return 'Success';
    }
    if (value === false) {
      return 'Failed';
    }
    return 'Unknown';
  }
}
