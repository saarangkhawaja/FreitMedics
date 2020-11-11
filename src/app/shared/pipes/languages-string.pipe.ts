import { Pipe, PipeTransform } from '@angular/core';
import { UtilityModel } from 'src/app/models/utility/utility.model';

@Pipe({
  name: 'languagesString'
})
export class LanguagesStringPipe implements PipeTransform {

  transform(languages: UtilityModel[]): string {
    
    let allLanguages = "";
    languages.forEach(element => {
      allLanguages += element.name + ", "
    })

    return allLanguages

  }

}
