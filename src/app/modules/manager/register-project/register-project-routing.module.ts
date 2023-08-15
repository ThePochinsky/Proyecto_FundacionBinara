import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProjectComponent } from './pages/register-project/register-project.component';

const routes: Routes = [
  {
    path:'project',
    component:RegisterProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterProjectRoutingModule { }
