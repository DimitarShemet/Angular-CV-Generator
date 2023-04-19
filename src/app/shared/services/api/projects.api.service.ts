import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IProject,
  IProjectAttributes,
  IProjectDTO,
  IProjectResponse,
  IProjectsResponse,
} from '../../interfaces/project.interface';
import { FormatService } from '../format.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(private http: HttpClient, private formatService: FormatService) {}

  addProject(projectAttributes: IProjectAttributes): Observable<IProject> {
    return this.http
      .post<IProjectResponse>(
        environment.BACKEND_URL + '/api/projects?populate=*',
        {
          data: projectAttributes,
        }
      )
      .pipe(
        map((elem) => elem.data),
        map((elem) => this.formatService.formatProjectResponse(elem))
      );
  }

  changeProject(
    id: number,
    projectAttributes: IProjectAttributes
  ): Observable<IProject> {
    return this.http
      .put<IProjectResponse>(
        environment.BACKEND_URL + '/api/projects/' + id + '?populate=*',
        {
          data: projectAttributes,
        }
      )
      .pipe(
        map((elem) => elem.data),
        map((elem) => this.formatService.formatProjectResponse(elem))
      );
  }

  getProjects(): Observable<IProject[]> {
    return this.http
      .get<IProjectsResponse>(
        environment.BACKEND_URL + '/api/projects?populate=*'
      )
      .pipe(
        map((elem) => elem.data),
        map((elem) => this.formatService.formatSkillsProperty(elem))
      );
  }

  getProjectById(id: number): Observable<IProject> {
    return this.http
      .get<IProjectResponse>(
        environment.BACKEND_URL + '/api/projects/' + id + '?populate=*'
      )
      .pipe(
        map((elem) => elem.data),
        map((elem) => this.formatService.formatProjectResponse(elem))
      );
  }
}
