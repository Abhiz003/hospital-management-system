import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { AboutComponent } from './about/about.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'staff', component:StaffComponent},
  {path:'about', component:AboutComponent},
  {path:'login-form', component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
