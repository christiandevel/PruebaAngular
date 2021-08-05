import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.sass']
})
export class ListarPersonaComponent implements OnInit {

  listPersonas: Persona[] = [];

  constructor(
    private _personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this._personaService.getPersonas().subscribe(data =>{
      console.log(data);
      this.listPersonas = data;
    }, error => {
      console.log(error);
    })  
  }

}
