import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RegisterProjectComponent } from 'src/app/modules/manager/register-project/pages/register-project/register-project.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  abrirSheet() {
    const sheetRef = this.bottomSheet.open(RegisterProjectComponent, {
      // puedes pasar datos al sheet así:
      // data: {nombre: 'Ejemplo', descripcion: 'Datos'}
    });

    sheetRef.afterDismissed().subscribe(() => {
      console.log('El bottom sheet se cerró');
    });
  }
}
