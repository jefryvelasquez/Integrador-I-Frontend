import { Routes } from '@angular/router';

import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component'

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
      }
    ]
  }
];
