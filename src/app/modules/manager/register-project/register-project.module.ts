import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterProjectRoutingModule } from './register-project-routing.module';
import { RegisterProjectComponent } from './pages/register-project/register-project.component';


@NgModule({
  declarations: [
    RegisterProjectComponent
  ],
  imports: [
    CommonModule,
    RegisterProjectRoutingModule
  ]
})
export class RegisterProjectModule { }
