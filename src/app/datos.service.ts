import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private myMessage = new BehaviorSubject<number>(0);
  //currentMessage = this.myMessage.asObservable();
  getMessage(): Observable<number> {
    return this.myMessage.asObservable();
  }

  updateMessage(message: number) {
    console.log("desde el servicio "+ message);
    this.myMessage.next(message);
    

  }

}
