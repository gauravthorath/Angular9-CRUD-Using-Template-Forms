import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MaterialModule } from '../material/material.module';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';

const EmployeeComponents = [
  EmployeeComponent,
  EmployeeListComponent,
  EmployeeDetailsComponent,
  AddEmployeeComponent,
];
@NgModule({
  declarations: [
    EmployeeComponents,
    DeleteModalComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [],
  providers: [EmployeeService]
})
export class EmployeeModule { }
