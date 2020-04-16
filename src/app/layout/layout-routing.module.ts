import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:
    [
      {path: '', redirectTo: 'Employee', pathMatch: 'full'},
      {
        path: 'Employee',
        loadChildren : () => import('../employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
