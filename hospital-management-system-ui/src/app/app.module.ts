import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { LoginFormComponent } from './Admin/login-form/login-form.component';
import { AboutComponent } from './about/about.component';
import { RecordsComponent } from './Admin/records/records.component';
import { CreateEmployeeComponent } from './Admin/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    LoginFormComponent,
    AboutComponent,
    RecordsComponent,
    CreateEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
