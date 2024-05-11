import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';

import { Tarea } from '../Tarea';
import { TareasService } from '../tareas.service';

@Component({
    selector: 'app-tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, AgregarTareaComponent],
})
export class TareasComponent {

    titulo: string = 'Mi App de Tareas';

    tareas: Tarea[] = [];

    isModalOpen = false;

    setOpen(isOpen: boolean) {
        this.isModalOpen = isOpen;
        isOpen = false;
    }

    constructor(private TareasService: TareasService) { }

    ngOnInit() {
        this.tareas = this.TareasService.obtenerTareas();
    }

    eliminarTarea(index: number) {
        console.log("Index a eliminar:", index);
        this.TareasService.eliminarTarea(index);
    }

}