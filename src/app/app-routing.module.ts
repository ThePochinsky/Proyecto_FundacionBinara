import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeHomeComponent } from './modules/home/welcome-home/welcome-home.component';
import { WelcomeManagerComponent } from './modules/manager/welcome-manager/welcome-manager.component';
import { WelcomeUserComponent } from './modules/users/welcome-user/welcome-user.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeHomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'manager',
    component: WelcomeManagerComponent,
    loadChildren: () => import('./modules/manager/manager.module').then(m => m.ManagerModule)
  },
  {
    path: 'user',
    component: WelcomeUserComponent,
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
