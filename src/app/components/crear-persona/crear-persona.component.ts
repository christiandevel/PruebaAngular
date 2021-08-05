import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.sass']
})
export class CrearPersonaComponent implements OnInit {

  personasForm: FormGroup;
  titulo = "Crear Producto";
  id: string | null;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _personaService: PersonaService,
    private aRouter: ActivatedRoute,

    ) {
      this.personasForm = this.fb.group({
        Documento: ['', Validators.required],
        Nombres: ['', Validators.required],
        Apellidos: ['', Validators.required],
        Telefono: ['', Validators.required],
        Correo: ['', Validators.required],
        Direccion: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarPersona(){
    const PERSONA: Persona = {
      // IdPersona: 110,
      Documento: this.personasForm.get('Documento')?.value,
      Nombres: this.personasForm.get('Nombres')?.value,
      Apellidos: this.personasForm.get('Apellidos')?.value,
      Telefono: this.personasForm.get('Telefono')?.value,
      Correo: this.personasForm.get('Correo')?.value,
      Direccion: this.personasForm.get('Direccion')?.value,
    }

    if(this.id !== null){
      this._personaService.editarPersona(this.id, PERSONA).subscribe(data => {
        // this.toastr.info('El producto fue modificado con Exito!', 'Producto modificado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.personasForm.reset();
      })
    }else{
      this._personaService.guardarPersona(PERSONA).subscribe(data => {
        console.log(data);
        this.toastr.success('El producto fue registrado con Exito!', 'Producto Registrado!');
      }, error => {
        console.log(error);
        this.personasForm.reset();
      })
    }

    
  }


  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Producto";
      this._personaService.obtenerPersona(this.id).subscribe(data => {
        console.log(data);
        console.log(data[0].Documento);        
        this.personasForm.setValue({
          Documento: data[0].Documento,
          Nombres: data[0].Nombres,
          Apellidos: data[0].Apellidos,
          Telefono: data[0].Telefono,
          Correo: data[0].Correo,
          Direccion: data[0].Direccion,
        })
      })
    }
  }

}
