import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerProyectoRoutingModule } from './ver-proyecto-routing.module';
import { VerProyectoComponent } from './pages/ver-proyecto/ver-proyecto.component';


@NgModule({
  declarations: [
    VerProyectoComponent
  ],
  imports: [
    CommonModule,
    VerProyectoRoutingModule
  ]
})
export class VerProyectoModule { }
