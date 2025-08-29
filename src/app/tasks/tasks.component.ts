import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  tasks = [
    { id: 't1', userId: 'u1', title: 'Task 1', time: '2 hours ago', summary: 'Summary for Task 1', dueDate: '2025-12-31' },
    { id: 't2', userId: 'u2', title: 'Task 2', time: '1 day ago', summary: 'Summary for Task 2', dueDate: '2025-12-31' },
    { id: 't3', userId: 'u3', title: 'Task 3', time: '3 days ago', summary: 'Summary for Task 3', dueDate: '2025-12-31' },
  ];

  get selectedUserTask() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    console.log('Task completed:', taskId);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    // Optionally, you can add logic to update the task status or notify the user
  }

  onStartAddTask() {
    console.log('Add Task clicked: ' + this.userId);
    this.isAddingTask = true;
    // Logic to add a new task
  }

  onCancelAddTask() {
    console.log('Task creation canceled');
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({ 
      id: Math.random().toString(), 
      userId: this.userId,
      title: taskData.title,
      time: new Date().toLocaleString(),
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });
    this.isAddingTask = false;
  }
}
