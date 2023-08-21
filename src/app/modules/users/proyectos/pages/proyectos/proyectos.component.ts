import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterProjectComponent } from 'src/app/modules/manager/register-project/pages/register-project/register-project.component';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/core/models/proyectos';
import { ProyectosService } from 'src/app/core/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projects?: Proyectos[];

  constructor(private dialog: MatDialog, private router: Router, private projectService: ProyectosService) { }

  ngOnInit() { }

  listProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  abrirSheet() {
    this.dialog.open(RegisterProjectComponent, {
      width: '800px',
      hasBackdrop: false,
      height: '600px'
    });
  }

  goToArticle(e: any) {
    this.router.navigate(['usuario/ver/proyecto']);
  }
}
