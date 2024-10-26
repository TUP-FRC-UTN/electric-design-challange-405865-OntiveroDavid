import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ModuleTypeService } from '../services/module-type.service';
import { BudgetService } from '../services/budget.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Your components
  ],
  imports: [
    ReactiveFormsModule,
    // Other imports
  ],
})
export class BudgetFormComponent implements OnInit {
  budgetForm: FormGroup;
  moduleTypes = [];

  constructor(
    private fb: FormBuilder,
    private moduleTypeService: ModuleTypeService,
    private budgetService: BudgetService
  ) {
    this.budgetForm = this.fb.group({
      date: ['', [Validators.required, this.dateValidator]],
      client: ['', Validators.required],
      modules: this.fb.array([], Validators.required)
    });
  }

  ngOnInit(): void {
    this.moduleTypeService.getModuleTypes().subscribe(types => (this.moduleTypes = types));
    this.addModule(); // Añadir 5 modulos de inicio
  }

  dateValidator(control: any) {
    const today = new Date();
    const selectedDate = new Date(control.value);
    return selectedDate > today ? { invalidDate: true } : null;
  }

  get modules(): FormArray {
    return this.budgetForm.get('modules') as FormArray;
  }

  addModule() {
    const moduleGroup = this.fb.group({
      moduleType: ['', Validators.required],
      price: [{ value: '', disabled: true }],
      slots: [{ value: '', disabled: true }],
      environment: ['', Validators.required]
    });
    this.modules.push(moduleGroup);
  }

  submitForm() {
    if (this.budgetForm.valid) {
      this.budgetService.addBudget(this.budgetForm.value).subscribe();
    }
  }
}