import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit{
// Get Employee Data from DB through Rest API
  employees:Employee[];

  constructor( private employeeService:EmployeeService ){};

  ngOnInit():void{
       this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {this.employees=data;});
  }


}
