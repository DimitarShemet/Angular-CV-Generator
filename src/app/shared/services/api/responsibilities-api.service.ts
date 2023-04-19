import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponsibilities } from '../../interfaces/responsibilities.interface';
import { IOption } from '../../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class ResponsibilitiesApiService {
  constructor(private http: HttpClient) {}
  getResponsibilities(): Observable<IOption[]> {
    return this.http
      .get<IResponsibilities>(environment.BACKEND_URL + '/api/responsibilities')
      .pipe(
        map((responsibilities) =>
          responsibilities.data.map((responsibility) => ({
            label: responsibility.attributes.name,
            value: responsibility.id,
          }))
        )
      );
  }
}
