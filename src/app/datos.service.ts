import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject} from 'rxjs';
import { Proyecto } from 'src/app/proyecto'


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private myMessage = new BehaviorSubject<Proyecto>(new Proyecto());
  //currentMessage = this.myMessage.asObservable();
  getMessage(): Observable<Proyecto> {
    return this.myMessage.asObservable();
  }

  updateMessage(message: Proyecto) {
    console.log("desde el servicio "+ message);
    this.myMessage.next(message);
    

  }

}
