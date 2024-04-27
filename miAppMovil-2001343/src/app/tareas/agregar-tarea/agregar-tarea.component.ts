import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/Tarea';

@Component({
    selector: 'app-agregar-tarea',
    templateUrl: './agregar-tarea.component.html',
    styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent implements OnInit {

    newTarea: Tarea = {
        Name: '',
        Month: 0,
        Year: 0,
        Description: '',
    }

    constructor() { }

    ngOnInit() { }
}