import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }
  employeeSignUp(data:any){
    return this.http.post('http://localhost:3000/Employees', data)
  }
  employeeLogin(data:any){
    
  }
}
