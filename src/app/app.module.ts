import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './student-list/student-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FruitbasketComponent } from './fruitbasket/fruitbasket.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from '@angular/common/http';
import { PipesComponent } from './pipes/pipes.component';
import { CustomDatePipe } from './shared/pipes/custom-date.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StudentListComponent,
    FruitbasketComponent,
    HomeComponent,
    SignupComponent,
    RegisterUtdComponent,
    RegisterUrfComponent,
    PagenotfoundComponent,
    PipesComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
