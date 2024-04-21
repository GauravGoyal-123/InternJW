import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  emp : any = [];
  constructor(private _emp : EmployeeService) {

  }
  ngOnInit() {
    this.emp = this._emp.getEmpArray();
  }
}
