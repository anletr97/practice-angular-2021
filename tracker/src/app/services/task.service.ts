import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Task } from '../models/Task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  /** API URL */
  private URL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }

  deleteTask = (task: Task): Observable<Task> => {
    const url = `${this.URL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
