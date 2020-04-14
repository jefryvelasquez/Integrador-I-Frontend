import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Starter Page',
    icon: 'mdi mdi-file',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Proyectos',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/ListarProyectos',
    title: 'Listar Proyectos',
    icon: 'mdi mdi-equal',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/CrearProyecto',
    title: 'Crear Proyecto',
    icon: 'mdi mdi-equal',
    class: '',
    extralink: false,
    submenu: []
  }
];
