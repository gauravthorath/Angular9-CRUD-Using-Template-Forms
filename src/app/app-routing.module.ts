import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/employeedetails', pathMatch: 'full'},
  { path: 'addemployee', component: AddEmployeeComponent},
  { path: 'employeelist', component: EmployeeListComponent},
  { path: 'employeedetails', component: EmployeeDetailsComponent},
  { path: 'aboutus', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
