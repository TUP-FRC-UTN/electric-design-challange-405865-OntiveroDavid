import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleTypeService {
  private apiUrl = 'http://localhost:3000/module-types';

  constructor(private http: HttpClient) {}

  getModuleTypes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}