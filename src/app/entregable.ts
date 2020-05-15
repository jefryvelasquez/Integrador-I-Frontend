import { Objetivo } from "./objetivo";

export class Entregable{
    id: number;
    idObjetivoEspecifico: Objetivo;
    name: string;
    porcentaje: number;

    setId(id: number){
        this.id = id;
    }
    
}