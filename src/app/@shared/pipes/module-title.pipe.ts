import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moduleTitle',
})
export class ModuleTitlePipe implements PipeTransform {
  transform(moduleName: string): string {
    return moduleName.replace('Component', ' Operators');
  }
}
