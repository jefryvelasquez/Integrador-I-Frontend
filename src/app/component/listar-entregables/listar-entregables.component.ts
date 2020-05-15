import { Component, OnInit } from '@angular/core';
import { Entregable } from 'src/app/entregable';
import { EntregableService } from 'src/app/entregable.services';
import { DatosService } from 'src/app/datos.service';
import { Proyecto } from 'src/app/proyecto';


@Component({
  selector: 'app-listar-entregables',
  templateUrl: './listar-entregables.component.html',
  styleUrls: ['./listar-entregables.component.css']
})
export class ListarEntregablesComponent implements OnInit {

  entregables: Entregable[];
  page = 1;
  pageSize = 4;
  message: string;
  proyecto= new Proyecto();
  id: number;

  messageFromSibling: number;
  private subscription;
  constructor(private entregableService: EntregableService, private data: DatosService) { }

  ngOnInit() {
    this.subscription = this.data.getMessage().subscribe(message => this.proyecto = message);
    console.log(this.proyecto.idO + "esto llega")
    this.getEntregablesId(this.proyecto.idO);
  }

  actualilzarMensaje(mymessage: number) {
    this.id = mymessage;
  }


  getEntregables(): void {
    this.entregableService.getEntregables()
      .subscribe(entregables => this.entregables = entregables);
  }


  getEntregablesId(id: number): void {
    this.entregableService.getEntregablesId(id)
      .subscribe(entregables => this.entregables = entregables);
  }

  enviar(){
    console.log("enviando " + this.proyecto);
    this.data.updateMessage(this.proyecto);
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
