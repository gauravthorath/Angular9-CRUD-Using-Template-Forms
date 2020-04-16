import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeData: any = {};
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee() {
  console.log(this.employeeData);
  this.employeeService.addEmployee(this.employeeData)
   .subscribe(
    res => console.log(res),
    err => console.log(err)
   );
  }

  cancel() {
    this.employeeData = [];
  }
}
