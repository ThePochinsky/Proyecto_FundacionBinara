import { Component } from '@angular/core';
import { Proyectos } from 'src/app/core/models/proyectos';
import { ProyectosService } from 'src/app/core/services/proyectos.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-ver-proyecto',
  templateUrl: './ver-proyecto.component.html',
  styleUrls: ['./ver-proyecto.component.css'],
  providers: [DatePipe]
})
export class VerProyectoComponent {
  proyecto!: Proyectos;


  constructor(private route: ActivatedRoute,private proyectosService: ProyectosService){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
   
    this.buscarProyectoPorId(id!);

    
  }

  buscarProyectoPorId(id: String): void {
    this.proyectosService.searchProject(id).subscribe({
      next: (data: any) => {
        this.proyecto = data.proyecto;
        console.log(this.proyecto.titulo);
      },
      error: error => {
        console.error('Error obteniendo el proyecto:', error);
      }
    });
    
    
  }
  getProvincia(lugar: any): string {
    return lugar.split(';')[2];
  }
}
