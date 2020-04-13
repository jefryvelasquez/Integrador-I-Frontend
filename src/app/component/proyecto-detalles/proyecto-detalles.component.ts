import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';

@Component({
  selector: 'app-proyecto-detalles',
  templateUrl: './proyecto-detalles.component.html',
  styleUrls: ['./proyecto-detalles.component.css']
})
export class ProyectoDetallesComponent implements OnInit {
  @Input() proyecto: Proyecto;

  constructor() { }

  ngOnInit(): void {
  }

}
