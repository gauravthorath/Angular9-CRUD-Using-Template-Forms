import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { EmployeeModule } from '../employee/employee.module';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeRoutingModule } from '../employee/employee-routing.module';

const LayoutComponents = [
  MainNavComponent,
  FooterComponent,
  LayoutComponent
];

@NgModule({
  declarations: [
    LayoutComponents
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  exports: []
})
export class LayoutModule { }
