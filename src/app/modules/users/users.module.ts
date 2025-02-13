import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
