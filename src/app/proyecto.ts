
export class Proyecto{
    id: number;
    idO: number;
    name: string;
    responsable: string;
    modalidad: string;
    asesor: string;
    fecha_Creacion: Date;
    fecha_Inicial: Date;
    fecha_Final: Date;
    objetivos: string;

    setIdObjetivo(idrt: number){
        this.idO= idrt;
    }

    getIdObjet(){
        return this.idO;
    }

}