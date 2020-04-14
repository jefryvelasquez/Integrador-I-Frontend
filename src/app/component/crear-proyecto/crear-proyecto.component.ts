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
  submitted = false;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  newProyecto(): void{
    this.submitted = false;
    this.proyecto = new Proyecto();
  }

  save() {
    this.proyectoService.addProyecto(this.proyecto)
    //.subscribe(proyecto => this.proyecto = proyecto);
      .subscribe(data => console.log(data), error => console.log(error));
    this.proyecto = new Proyecto();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
