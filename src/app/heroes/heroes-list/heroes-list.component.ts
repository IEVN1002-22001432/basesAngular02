import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {
heroes:any[]=[
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
