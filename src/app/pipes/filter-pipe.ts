import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {

  transform(repos, name: string, searchString: string): any {
    return searchString ? repos.filter((repo) => repo[name].toString().toLowerCase().includes(searchString)) : repos;
  }

}
