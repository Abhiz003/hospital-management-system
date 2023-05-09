import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { AboutComponent } from './about/about.component';
import { LoginFormComponent } from './Admin/login-form/login-form.component';
import { RecordsComponent } from './Admin/records/records.component';
import { CreateEmployeeComponent } from './Admin/create-employee/create-employee.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'staff', component:StaffComponent},
  {path:'about', component:AboutComponent},
  {path:'login-form', children:[
  {path:'', component:LoginFormComponent},
  {path:'records', children:[
    {path:'',component:RecordsComponent},
    {path:'createEmployee', component:CreateEmployeeComponent}
    ]}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
