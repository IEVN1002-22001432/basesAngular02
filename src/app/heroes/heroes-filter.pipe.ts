import { Pipe, PipeTransform } from '@angular/core';
import { HeroesList } from './heroes-list';

@Pipe({
  name: 'heroesFilter',
  standalone: false
})
export class HeroesFilterPipe implements PipeTransform {

  transform(value: HeroesList[], args:string): HeroesList[] {
    let filter:string=args?args.toLocaleLowerCase():'';

    return filter?value.filter((hero:HeroesList)=>
    hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}
