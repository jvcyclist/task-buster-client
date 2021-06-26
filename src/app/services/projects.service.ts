import { Observable } from 'rxjs';
import { Project } from './../shared/project.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private URL = 'http://localhost:8070/api/projects';

  constructor(private http: HttpClient) {
  }

  addProject(project: Project): Observable<Project>{
    return this.http.post(this.URL, project)
  }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.URL);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.URL + '/' + id);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.URL + '/' + project.id, project);
  }

  deleteProject(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + '/' + id)
  }

}
