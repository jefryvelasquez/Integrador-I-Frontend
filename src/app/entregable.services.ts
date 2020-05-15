import { Injectable } from '@angular/core';
import { Entregable } from './entregable';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class EntregableService {

    private entregablesUrl = environment.PROYECTOS_API_URL  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /** GET Entregables from the server */
    getEntregables(): Observable<Entregable[]> {
        return this.http.get<Entregable[]>(this.entregablesUrl +'/entregables')
            .pipe(
                tap(e => console.log(e[0])),
                catchError(this.handleError<Entregable[]>('getEntregables', []))
            );
    }

     /** GET Entregables by idObjetivo.*/
  getEntregablesId(id: number): Observable<Entregable[]> {
    const url = `${this.entregablesUrl + '/entregables'}/?idproyecto=${id}`;
    return this.http.get<Entregable[]>(url)
    .pipe(
        tap(e => console.log(e[0])),
        catchError(this.handleError<Entregable[]>('getObjetivosId id=${id}', []))
    );
}


    /** POST: add a new proyecto to the server */
    addObjetivo(entregable: Entregable): Observable<Entregable> {
        return this.http.post<Entregable>(this.entregablesUrl + '/entregables/crear/', entregable, this.httpOptions)
            .pipe(
                tap((newEntregable: Entregable) => this.log(`added entregable w/ id=${newEntregable.id}`))
            );
    }

    /**
        * Handle Http operation that failed.
        * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    private handleError<T>(operation = 'operation', result?: T) {
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
        this.messageService.add(`ObjetivoService: ${message}`);
    }

}