import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit{

  employees:Employee[];

  constructor(){};

  ngOnInit():void{
    this.employees=[
      {
        "employeeId":1,
        "firstName":"Hansraj",
        "lastName":"Hathi",
        "email":"hathi@123"
      },
      {
        "employeeId":2,
        "firstName":"gajraj",
        "lastName":"Hathi",
        "email":"sathi@123"
      }
    ]
  }
}
