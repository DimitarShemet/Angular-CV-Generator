import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillsApiService {
  constructor(private http: HttpClient) {}
  getSkills(): Observable<any> {
    return this.http.get<any>(environment.BACKEND_URL + '/api/skills').pipe(
      map((skills: any) =>
        skills.data.map((skill: any) => ({
          label: skill.attributes.name,
          value: skill.id,
        }))
      )
    );
  }
}
