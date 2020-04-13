import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectosUrl = environment.PROYECTOS_API_URL  // URL to web api

  /** GET proyectos from the server */
getProyectos (): Observable<Proyecto[]> {
  return this.http.get<Proyecto[]>(this.proyectosUrl + '/proyectos')
  
}
  constructor(
    private http: HttpClient ) { }
}
