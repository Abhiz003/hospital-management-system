import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { RecordsComponent } from '../records/records.component';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;

  constructor(private employeeService: EmployeeService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  goToEmployeeList() {
    this.router.navigate([RecordsComponent]);
  }
  onSubmit(employee: Employee) {
    console.log(employee);
    this.employeeService.createEmployee(employee).subscribe(data => { console.log(data) });
    this.goToEmployeeList();
  }

}
