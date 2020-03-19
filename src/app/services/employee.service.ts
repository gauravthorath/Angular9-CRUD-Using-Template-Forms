import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  saveEmployee(employeeData) {
    const Url = 'http://localhost:3000/api/addEmployee';
    console.log('in service call');
    console.log(employeeData);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<any>(Url, employeeData, {headers});
  }
}
