import { Component, Input, Output, EventEmitter} from '@angular/core';
import {type Task} from './task.model'; // Assuming task.model.ts is in the same directory


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    console.log('onCompleteTask:', this.task.id);
    this.complete.emit(this.task.id);
  }

}
