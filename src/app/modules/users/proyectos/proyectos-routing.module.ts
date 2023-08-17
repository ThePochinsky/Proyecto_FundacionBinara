import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const routes: Routes = [
  {
    path: 'proyectos',
    component: ProyectosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatBottomSheetModule
  ],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }

