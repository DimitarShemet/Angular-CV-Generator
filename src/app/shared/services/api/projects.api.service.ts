import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IProject,
  IProjectResponse,
  IProjectsResponse,
} from '../../interfaces/project.interface';
import { ProjectsService } from '../projects.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(
    private http: HttpClient,
    private projectsFormatter: ProjectsService
  ) {}

  addProject(project: IProject): Observable<any> {
    return this.http.post(environment.BACKEND_URL + '/api/projects', {
      data: project,
    });
  }

  editProject(id: number, project: IProject) {
    return this.http
      .put(environment.BACKEND_URL + '/api/projects/' + id + '?populate=*', {
        data: project,
      })
      .subscribe((val) => console.log(val));
  }

  getProjects(): Observable<IProject[]> {
    return this.http
      .get<IProjectsResponse>(
        environment.BACKEND_URL + '/api/projects?populate=*'
      )
      .pipe(
        map((elem) => elem.data),
        map((elem) => this.projectsFormatter.formatProjectsResponse(elem))
      );
  }

  getProject(id: number): any {
    return this.http
      .get<IProjectResponse>(
        environment.BACKEND_URL + '/api/projects/' + id + '?populate=*'
      )
      .pipe(
        map((elem) => elem.data),
        map((elem) => this.projectsFormatter.formatProjectResponse(elem))
      );
  }
}
