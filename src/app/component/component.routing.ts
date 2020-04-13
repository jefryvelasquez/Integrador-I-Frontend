import { Routes } from '@angular/router';

import { NgbdAccordionBasicComponent } from './accordion/accordion.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accordion',
        component: NgbdAccordionBasicComponent,
        data: {
          title: 'Accordion',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Accordion' }
          ]
        }
      }
    ]
  }
];
