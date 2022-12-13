import { Component, OnInit } from '@angular/core';
import { ipokeapi } from './Ipokemont';
import { PokeapiService } from './pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tareaapi';
  nombre: string=""
id: Number = 0
abilidades: string=""
experiencia:number=0
altura: number = 0
img: string=""
conteo: number = 0
idbuscar: number = 0
  Ipokeapiservice: any;

  constructor(public PokeapiService: PokeapiService ){}

  ngOnInit(): void {
    this.PokeapiService.getpokemonts().subscribe(animalito =>{
       this.nombre= animalito.name
      this.img= animalito.sprites.other.dream_world.front_default
      this.id = animalito.id
      this.altura = animalito.height
      this.abilidades= animalito.abilities.ability.name
     this.experiencia=animalito.base_experience
      // pokemon.tipo
      // pokemon.id
    })
  }
}
