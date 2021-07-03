import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprint } from '../shared/sprint.model';

@Injectable({
  providedIn: 'root'
})
export class SprintsService {

  private URL = 'http://localhost:8070/api/sprints';

  constructor(private http: HttpClient) { }

  getSprints(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>(this.URL);
  }

  getSprint(id: number): Observable<Sprint> {
    return this.http.get<Sprint>(this.URL + '/' + id);
  }

  getCurrentSprint(): Observable<Sprint> {
    return this.http.get<Sprint>(this.URL + '/current');
  }

  getSprintByProjectId(projectId: number){
    return this.http.get<Sprint[]>(this.URL + '/?projectId=' + projectId)
  }

  addSprint(sprint: Sprint){
    return this.http.post<Sprint>(this.URL, sprint);
  }

}
