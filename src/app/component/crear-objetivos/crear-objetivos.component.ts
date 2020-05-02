import { Component, OnInit } from '@angular/core';
import { Objetivo } from 'src/app/objetivo';
import { ObjetivoService } from 'src/app/objetivo.services';

@Component({
  selector: 'app-crear-objetivos',
  templateUrl: './crear-objetivos.component.html',
  styleUrls: ['./crear-objetivos.component.css']
})
export class CrearObjetivosComponent implements OnInit {


  objetivo: Objetivo = new Objetivo();
  errorServer: String;

  constructor(private objetivoService: ObjetivoService) { }

  ngOnInit(): void {
  }

  save() {
    this.objetivoService.addObjetivo(this.objetivo)
      .subscribe(data => { console.log(data); this.errorServer = "El Objetivo fue creado" },
        error => {
          console.error(error);
          this.errorServer = error.error
        });
    this.objetivo = new Objetivo();
  }

  onSubmit() {
    this.save();
  }

}