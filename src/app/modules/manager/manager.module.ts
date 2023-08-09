import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { WelcomeManagerComponent } from './welcome-manager/welcome-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class ManagerModule { }
