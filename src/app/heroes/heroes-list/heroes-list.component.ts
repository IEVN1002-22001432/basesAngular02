import { Component } from '@angular/core';
import { HeroesList } from '../heroes-list';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {

  listFilter:string='';

  muestraImg:boolean=true;
  showImage(){
    this.muestraImg = !this.muestraImg;
  }

heroes:HeroesList[]=[
  {
    imagen: "https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"Goku",
    descripcion:"Kakaroto",
    raza:"Saiyan",
    ki:9000
  },
  {
    imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre:"Vegeta",
    descripcion:"777",
    raza:"Saiyan",
    ki:2500
  },
  {
    imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:"Picolo",
    descripcion:"Prieto",
    raza:"Namekiano",
    ki:9000
  },
  {
    imagen: "https://dragonball-api.com/characters/Freezer.webp",
    nombre:"Freezer",
    descripcion:"El metrosexual malvado",
    raza:"Frieza",
    ki:9000
  }
]
}
