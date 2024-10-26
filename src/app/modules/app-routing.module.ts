import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from '../budget-list/budget-list.component';

const routes: Routes = [
  { path: 'budgets', component: BudgetListComponent },
  { path: '', redirectTo: '/budgets', pathMatch: 'full' } // Redirigir a presupuestos por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }