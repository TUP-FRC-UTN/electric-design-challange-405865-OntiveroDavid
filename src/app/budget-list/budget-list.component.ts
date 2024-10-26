import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../models/budget';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe(
      (data: Budget[]) => {
        console.log('Datos de presupuestos:', data);
        this.budgets = data;
      },
      error => {
        console.error('Error al recuperar presupuestos:', error);
      }
    );
  }

  viewBudget(id: number | undefined) {
    if (id === undefined) {
      console.warn('El ID del presupuesto no está definido');
      return;
    }
    console.log('Ver presupuesto con ID:', id);
  }
}