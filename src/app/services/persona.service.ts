import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://190.60.101.59:6003/api/personas/';
  urlGet = 'http://190.60.101.59:6003/api/Personas/0/';

  constructor(private http: HttpClient) { }

  obtenerPersona(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  getPersonas(): Observable<any>{
    return this.http.get(this.urlGet);
  }

  guardarPersona(persona: Persona): Observable<any>{
    return this.http.post(this.url, persona);
  }

  editarPersona(id: string, persona: Persona): Observable<any> {
    return this.http.put(this.url + id, persona);
  }

 
}
