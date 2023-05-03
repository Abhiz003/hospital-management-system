import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { LoginFormComponent } from './Admin/login-form/login-form.component';
import { AboutComponent } from './about/about.component';
import { RecordsComponent } from './Admin/records/records.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    LoginFormComponent,
    AboutComponent,
    RecordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
