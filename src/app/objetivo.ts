import { Proyecto } from "./proyecto";


export class Objetivo{
    id: number;
    name: string;
    porcentaje: number;
    id_proyecto: Proyecto;
    entregable: string;
    estadoObjetivo: number;

    objetivo(){
        this.estadoObjetivo = 0;
    }

    setId(id:number){
        this.id=id;
    }
}