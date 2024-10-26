import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = 'http://localhost:3000/budgets';

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBudgetById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addBudget(budget: any): Observable<any> {
    return this.http.post(this.apiUrl, budget);
  }
}