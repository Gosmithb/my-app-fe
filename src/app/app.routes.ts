import { Routes } from '@angular/router';
import { LoginComponent } from './modules/core/home/pages/login/login.component';

export const routes: Routes = [
  {path: "", component: LoginComponent, pathMatch: "full"},
];
