import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emp : any = [
    {
      name : "gaurav",
      age : 21
    }
  ]

  constructor() { }

  getEmpArray() {
    return this.emp;
  }
}
