import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children:
    [
      {path: '', redirectTo: 'employeelist', pathMatch: 'full'},
      { path: 'employeelist', component: EmployeeListComponent },
      { path: 'addemployee', component: AddEmployeeComponent },
      { path: 'addemployee/:id', component: AddEmployeeComponent },
      { path: 'employeedetails', component: EmployeeDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
