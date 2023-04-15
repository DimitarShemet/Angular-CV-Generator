import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IProject,
  IProjectAttributes,
  IProjectResponse,
} from '../../interfaces/project.interface';
import { FormatService } from '../format.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(private http: HttpClient, private formatService: FormatService) {}

  addProject(projectAttributes: IProjectAttributes): Observable<any> {
    return this.http.post(
      environment.BACKEND_URL + '/api/projects?populate=*',
      {
        data: projectAttributes,
      }
    );
  }

  changeProject(
    id: number,
    projectAttributes: IProjectAttributes
  ): Observable<any> {
    return this.http.put(
      environment.BACKEND_URL + '/api/projects/' + id + '?populate=*',
      {
        data: projectAttributes,
      }
    );
  }

  getProjects(): Observable<IProject[]> {
    return this.http
      .get<any>(environment.BACKEND_URL + '/api/projects?populate=*')
      .pipe(
        map((elem) => elem.data),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  getProjectById(id: number): Observable<IProject> {
    return this.http
      .get<IProjectResponse>(
        environment.BACKEND_URL + '/api/projects/' + id + '?populate=*'
      )
      .pipe(
        map((elem) => elem.data),
        map((elem: any) => this.formatService.formatProjectResponse(elem))
      );
  }
}
