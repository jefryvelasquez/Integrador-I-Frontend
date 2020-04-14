import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { ProyectosComponent } from './Proyectos/proyectos.component';
import { ProyectoDetallesComponent } from './proyecto-detalles/proyecto-detalles.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    NgbdAccordionBasicComponent,
    ProyectosComponent,
    ProyectoDetallesComponent,
    CrearProyectoComponent,
    MessagesComponent
  ]
})
export class ComponentsModule {}
