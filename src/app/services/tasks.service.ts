import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Task} from '../shared/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = 'http://localhost:8070/api/tasks';
  tasks: Array<Task>;

  constructor(private http: HttpClient) {
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.URL, task);
  }


  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.URL + '/' + id);
  }

  getAllTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL);
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(this.URL + '/' + task.id, task);
  }
}
