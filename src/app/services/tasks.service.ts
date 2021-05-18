import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Task} from '../shared/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  URL = 'http://localhost:8070/api/tasks';
  tasks: Array<Task>;

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL);
  }
}
