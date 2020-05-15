import { Component, OnInit, Input } from '@angular/core';
import { Objetivo } from 'src/app/objetivo';
import { ObjetivoService } from 'src/app/objetivo.services';
import { DatosService } from 'src/app/datos.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { Proyecto } from 'src/app/proyecto';


@Component({
  selector: 'app-listar-objetivos',
  templateUrl: './listar-objetivos.component.html',
  styleUrls: ['./listar-objetivos.component.css']
})
export class ListarObjetivosComponent implements OnInit {

  objetivos: Objetivo[];
  proyecto = new Proyecto();
  selectedObjetivo: Objetivo;
  page = 1;
  pageSize = 4;
  message: string;
  id: number;

  messageFromSibling: number;
  private subscription;


  constructor(private objetivoService: ObjetivoService, private data: DatosService) {
    
  }

  ngOnInit() {
    this.subscription = this.data.getMessage().subscribe(message => this.proyecto = message);
    //console.log(this.id + "dfjkslahgfhfgsldhfjkgjkasdfhgkjs")
    this.getObjetivosId(this.proyecto.id);
  }

  actualilzarMensaje(mymessage: number) {
    this.id = mymessage;
  }


  getObjetivos(): void {
    this.objetivoService.getObjetivos()
      .subscribe(objetivos => this.objetivos = objetivos);
  }


  getObjetivosId(id: number): void {
    this.objetivoService.getObjetivosId(id)
      .subscribe(objetivos => this.objetivos = objetivos);
  }

  enviar(idr: number){
    this.proyecto.idO = idr;
    console.log("enviando " + this.proyecto.idO);
    this.data.updateMessage(this.proyecto);
    
  }

  enviarC(){
    console.log("enviando " + this.proyecto);
    this.data.updateMessage(this.proyecto);
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
