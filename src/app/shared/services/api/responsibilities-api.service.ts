import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResponsibilitiesApiService {
  constructor(private http: HttpClient) {}
  getResponsibilities(): Observable<any> {
    return this.http
      .get(environment.BACKEND_URL + '/api/responsibilities')
      .pipe(
        map((responsibilities: any) =>
          responsibilities.data.map((responsibility: any) => ({
            label: responsibility.attributes.name,
            value: responsibility.id,
          }))
        )
      );
  }
}
