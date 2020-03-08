import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee() {
   console.log('FormData');
  }

  cancel() {
    console.log('FormData');
  }

}
