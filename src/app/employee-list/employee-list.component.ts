import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Employee {
  firstName: string;
  lastName: string;
  Address: string;
  doj: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'Address', 'doj'];
  employeeList: [];

  dataSource = new MatTableDataSource<Employee>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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
    this.employeeList = [];
    this.employeeService.getEmployees()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        err => console.log(err)
      );
  }
}
