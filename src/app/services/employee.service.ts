import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  saveEmployee(employeeData) {
    const Url = 'http://localhost:3000/api/addEmployee';
    console.log('in save service call');
    console.log(employeeData);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<any>(Url, employeeData, {headers});
  }

  getEmployees() {
    const Url = 'http://localhost:3000/api/getEmployees';
    console.log('in get service call');
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.get<any>(Url, {headers});
  }

  deleteEmployees(id: any) {
    const Url = `http://localhost:3000/api/getEmployee/${id}`;
    console.log('in delete service call');
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(Url, {headers});
  }
}
