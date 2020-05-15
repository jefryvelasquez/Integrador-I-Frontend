import { Routes } from '@angular/router';

import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { CrearObjetivosComponent } from './crear-objetivos/crear-objetivos.component';
import { ListarObjetivosComponent } from './listar-objetivos/listar-objetivos.component';
import { ListarEntregablesComponent } from './listar-entregables/listar-entregables.component';
import { CrearEntregablesComponent } from './crear-entregables/crear-entregables.component';





export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ListarProyectos',
        component: NgbdAccordionBasicComponent,
        data: {
          title: 'Listar Proyectos',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'ListarProyectos' }
          ]
        }
      },{
        path: 'CrearProyecto',
        component: CrearProyectoComponent,
        data: {
          title: 'Crear Proyecto',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'CrearProyecto' }
          ]
        }
      },
      {
        path: 'CrearObjetivo',
        component: CrearObjetivosComponent,
        data: {
          title: 'Crear Objetivo',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'CrearObjetivo' }
          ]
        }
      },
      {
        path: 'ListarObjetivos',
        component: ListarObjetivosComponent,
        data: {
          title: 'Listar Objetivos',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'ListarObjetivos' }
          ]
        }
      },
      {
        path: 'ListarEntregables',
        component: ListarEntregablesComponent,
        data: {
          title: 'Listar Entregables',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'ListarEntregables' }
          ]
        }
      },
      {
        path: 'CrearEntregables',
        component: CrearEntregablesComponent,
        data: {
          title: 'Crear Entregables',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'CrearEntregables' }
          ]
        }
      }
    ]
  }
];
