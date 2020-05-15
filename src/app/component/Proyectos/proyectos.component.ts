import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectoService } from 'src/app/proyecto.service';
import { MessageService } from 'src/app/message.service';
import { DatosService } from 'src/app/datos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[];
  selectedProyecto: Proyecto;
  selectedid: number;
  page = 1;
  pageSize = 4;

  

  message:string;


  constructor(private proyectoService: ProyectoService, 
    private messageService: MessageService, private dataService: DatosService) { }
  
  ngOnInit() {
    this.getProyectos();
  }
  
  onSelect(proyecto: Proyecto): void {
    this.selectedProyecto = proyecto;
    this.messageService.add(`ProyectoService: Selected proyecto id=${proyecto.id}`);
  }
  

  getProyectos(): void {
    this.proyectoService.getProyectos()
        .subscribe(proyectos => this.proyectos = proyectos);
  }

  enviar(p: Proyecto){
    console.log("enviando " + p);
    this.dataService.updateMessage(p);
    
  }

}
