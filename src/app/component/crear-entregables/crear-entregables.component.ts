import { Component, OnInit } from '@angular/core';
import { Entregable } from 'src/app/entregable';
import { EntregableService } from 'src/app/entregable.services';
import { DatosService } from 'src/app/datos.service';
import { Proyecto } from 'src/app/proyecto';

@Component({
  selector: 'app-crear-entregables',
  templateUrl: './crear-entregables.component.html',
  styleUrls: ['./crear-entregables.component.css']
})
export class CrearEntregablesComponent implements OnInit {

  entregable: Entregable = new Entregable();
  errorServer: String;
  message: string;
  id: number;
  private subscription;
  proyecto = new Proyecto();
 
  constructor(private entregableService: EntregableService,private data: DatosService) { }

  ngOnInit(): void {
    this.subscription = this.data.getMessage().subscribe(message => this.proyecto = message);
    this.entregable.setId(this.proyecto.idO);
  }

  save() {
    this.entregableService.addObjetivo(this.entregable)
      .subscribe(data => { console.log(data); this.errorServer = "El Entregable fue creado" },
        error => {
          console.error(error);
          this.errorServer = error.error
        });
    this.entregable = new Entregable();
  }

  enviar(){
    console.log("enviando " + this.proyecto);
    this.data.updateMessage(this.proyecto);
    
  }

  onSubmit() {
    this.save();
  }

}