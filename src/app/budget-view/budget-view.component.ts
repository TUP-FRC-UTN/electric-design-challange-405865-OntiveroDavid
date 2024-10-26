import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-view',
  standalone: true,
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css']
})
export class BudgetViewComponent implements OnInit {
  budget: any;

  constructor(
    private route: ActivatedRoute,
    private budgetService: BudgetService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.budgetService.getBudgetById(id).subscribe(data => (this.budget = data));
    } else {
      console.error('El ID es nulo. No se puede obtener el presupuesto.');
    }
  }
}