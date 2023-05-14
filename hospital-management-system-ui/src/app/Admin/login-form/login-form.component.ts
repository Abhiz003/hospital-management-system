import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/Services/admin-login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private user:AdminLoginService, private router:Router){}

  signUp(data:any):void{
    this.user.employeeSignUp(data).subscribe((result)=>{console.log(result)})
  }
  login(data:any):void{
    this.router.navigate(['login-form/records'])
    console.log("user logged in successfully")
  }
  
} 
