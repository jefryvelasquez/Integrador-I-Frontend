import { Injectable } from '@angular/core';
import { Objetivo } from './objetivo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class ObjetivoService {

    private objetivosUrl = environment.PROYECTOS_API_URL  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /** GET Objetivos from the server */
    getObjetivos(): Observable<Objetivo[]> {
        return this.http.get<Objetivo[]>(this.objetivosUrl +'/objetivos')
            .pipe(
                tap(e => console.log(e[0])),
                catchError(this.handleError<Objetivo[]>('getObjetivos', []))
            );
    }

     /** GET Objetivos by id.*/
  getObjetivosId(id: number): Observable<Objetivo[]> {
    const url = `${this.objetivosUrl + '/objetivos'}/?idproyecto=${id}`;
    return this.http.get<Objetivo[]>(url)
    .pipe(
        tap(e => console.log(e[0])),
        catchError(this.handleError<Objetivo[]>('getObjetivosId id=${id}', []))
    );
}


    /** POST: add a new proyecto to the server */
    addObjetivo(objetivo: Objetivo): Observable<Objetivo> {
        return this.http.post<Objetivo>(this.objetivosUrl + '/objetivos/crear/', objetivo, this.httpOptions)
            .pipe(
                tap((newObjetivo: Objetivo) => this.log(`added objetivo w/ id=${newObjetivo.id}`))
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