import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    FormsModule
  ]
})
export class ProyectosModule { }
