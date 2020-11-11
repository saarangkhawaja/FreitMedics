import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageConverter'
})
export class AgeConverterPipe implements PipeTransform {

  transform(dob: string): string {
    if(!dob) return "N/A"
    let dateOfBirth: Date = new Date(dob);
    var ageDifMs = Date.now() - dateOfBirth.getTime();
    var ageDate = new Date(ageDifMs)
    if (Math.abs(ageDate.getUTCFullYear() - 1970) == 0) {
      let convertedAge: number = Math.round(Math.abs((+dateOfBirth) - (+(new Date))) / 8.64e7)
      return convertedAge.toLocaleString().concat("d")
    }
    let convertedAge: number = Math.abs(ageDate.getUTCFullYear() - 1970)
    return convertedAge.toLocaleString().concat('y');
  }

}
