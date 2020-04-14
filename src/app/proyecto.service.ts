import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectosUrl = environment.PROYECTOS_API_URL  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET proyectos from the server */
  getProyectos (): Observable<Proyecto[]> {
  return this.http.get<Proyecto[]>(this.proyectosUrl + '/proyectos')
  .pipe(
    tap(e => console.log(e[0].fecha_Creacion)),
    catchError(this.handleError<Proyecto[]>('getProyectos', []))
  );
}

  /** POST: add a new proyecto to the server */
  addProyecto (proyecto: Proyecto): Observable<Proyecto> {
  return this.http.post<Proyecto>(this.proyectosUrl + '/proyectos/crear', proyecto,this.httpOptions)
  .pipe(
    tap((newProyecto: Proyecto) => this.log(`added proyecto w/ id=${newProyecto.id}`)),
    catchError(this.handleError<Proyecto>('addProyecto'))
  );
  }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a ProyectoService message with the MessageService */
    private log(message: string) {
    this.messageService.add(`ProyectoService: ${message}`);
  }

}
