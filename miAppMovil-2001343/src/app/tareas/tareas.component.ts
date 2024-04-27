import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarea } from 'src/Tarea';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { TareasService } from '../tareas.service';

@Component({
    selector: 'app-tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {

    constructor(private TareaService: TareasService) { }

    ngOnInit() {
        this.tareas = this.TareaService.getTareas();
    }

    @ViewChild(AgregarTareaComponent) child: any;

    agregarTarea() {
        this.TareaService.agregarTarea(this.child.newTarea);
    }

    tareas: Tarea[] = [];

    dropTarea(note: Tarea) {
        this.TareaService.deleteTarea(note);
        alert("Se ha eliminado exitosamente la tarea!");
    }

}