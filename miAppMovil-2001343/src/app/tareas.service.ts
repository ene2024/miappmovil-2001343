import { Injectable } from '@angular/core';
import { Tarea } from 'src/Tarea';

@Injectable({
    providedIn: 'root'
})
export class TareasService {

    constructor() { }

    Tareas: Tarea[] = [];

    getTareas() {
        return this.Tareas;
    }

    agregarTarea(tarea: Tarea) {
        this.Tareas.push(tarea);
    }

    deleteTarea(tarea: Tarea) {
        let position: number = this.Tareas.indexOf(tarea);
        this.Tareas.splice(position, 1);
    }


}