import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISkills } from '../../interfaces/skills.interface';
import { IOption } from '../../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsApiService {
  constructor(private http: HttpClient) {}
  getSkills(): Observable<IOption[]> {
    return this.http.get<ISkills>(environment.BACKEND_URL + '/api/skills').pipe(
      map((skills) =>
        skills.data.map((skill) => ({
          label: skill.attributes.name,
          value: skill.id,
        }))
      )
    );
  }
}
