import { Component, enableProdMode } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  employee:Employee = new Employee();
  
  onSubmit(){
    console.log(this.employee)
  }
}
