import { Component, OnInit } from '@angular/core';
import { Objetivo } from 'src/app/objetivo';
import { ObjetivoService } from 'src/app/objetivo.services';
import { DatosService } from 'src/app/datos.service';
import { Proyecto } from 'src/app/proyecto';

@Component({
  selector: 'app-crear-objetivos',
  templateUrl: './crear-objetivos.component.html',
  styleUrls: ['./crear-objetivos.component.css']
})
export class CrearObjetivosComponent implements OnInit {


  objetivo: Objetivo = new Objetivo();
  errorServer: String;
  private subscription;
  proyecto = new Proyecto();

  constructor(private objetivoService: ObjetivoService, private data: DatosService) { }

  ngOnInit(): void {
    this.subscription = this.data.getMessage().subscribe(message => this.proyecto = message);
    this.objetivo.setId(this.proyecto.id)
  }

  save() {
    this.objetivoService.addObjetivo(this.objetivo)
      .subscribe(data => { console.log(data); this.errorServer = "El Objetivo fue creado" },
        error => {
          console.error(error);
          this.errorServer = error.error
        });
  }

  onSubmit() {
    this.save();
  }

  enviar(){
    console.log("enviando " + this.proyecto);
    this.data.updateMessage(this.proyecto);
  }

}