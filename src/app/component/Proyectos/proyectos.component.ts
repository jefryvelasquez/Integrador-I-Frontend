import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectoService } from 'src/app/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[];
  selectedProyecto: Proyecto;

  getProyectos(): void {
    this.proyectoService.getProyectos()
        .subscribe(proyectos => this.proyectos = proyectos);
  }

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.getProyectos();
  }
  
  onSelect(proyecto: Proyecto): void {
    this.selectedProyecto = proyecto;
  }

}
