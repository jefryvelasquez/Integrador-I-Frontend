import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectoService } from 'src/app/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  proyectos: Proyecto[];
  proyecto: Proyecto = new Proyecto();
  errorServer: String;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  save() {
    this.proyectoService.addProyecto(this.proyecto)
      .subscribe(data => { console.log(data); this.errorServer = "El proyecto fue creado" },
        error => {
          console.error(error);
          this.errorServer = error.error
        });
    this.proyecto = new Proyecto();
  }

  onSubmit() {
    this.save();
  }

}
