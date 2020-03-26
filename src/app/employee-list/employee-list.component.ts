import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList: [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employeeList = [
    //   {
    //     firstName: 'Gaurav',
    //     lastName: 'Thorat',
    //     Address: 'Nashik',
    //     doj: '22'
    //   },
    //   {
    //     firstName: 'Sneha',
    //     lastName: 'Thorat',
    //     Address: 'Nashik',
    //     doj: '25'
    //   }
    // ];

    // this.employeeList = res

    this.employeeList = [];
    this.employeeService.getEmployees()
    .subscribe(
      res => this.employeeList = res,
      err => console.log(err)
     );
  }

}
