import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../modules/app-routing.module';
import { AppComponent } from '../app.component';
import { BudgetListComponent } from '../budget-list/budget-list.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent // Asegúrate de que este componente esté aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegúrate de que el AppRoutingModule esté aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }