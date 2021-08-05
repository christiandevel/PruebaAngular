import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { ListarPersonaComponent } from './components/listar-persona/listar-persona.component';

const routes: Routes = [
  { path: '', component: ListarPersonaComponent},
  { path: 'crear-persona', component: CrearPersonaComponent},
  { path: 'editar-persona/:id', component: CrearPersonaComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
