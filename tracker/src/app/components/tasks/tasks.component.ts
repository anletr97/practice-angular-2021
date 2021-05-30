import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(private service: TaskService) { }

  ngOnInit(): void {
    // Fetch all tasks from service
    this.service.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask = (task: Task) => {
    this.service.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    })
  }

}
