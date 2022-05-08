import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(inputData:any[], min:number, max:number): any[]
  {
  
    return inputData.filter(function(x) {
      return x.sal >=min && x.sal<= max });
  }

}
