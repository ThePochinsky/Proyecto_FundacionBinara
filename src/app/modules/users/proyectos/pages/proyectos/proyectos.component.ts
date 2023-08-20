import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterProjectComponent } from 'src/app/modules/manager/register-project/pages/register-project/register-project.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  
  constructor(public dialog: MatDialog) { }

  abrirSheet() {
    this.dialog.open(RegisterProjectComponent, {
      width: '800px',
      hasBackdrop: false,
      height:'600px'
    });
  }
}