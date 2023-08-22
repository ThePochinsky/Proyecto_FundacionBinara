import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: 'projects',
    component: ProyectosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatDialogModule
  ],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }

