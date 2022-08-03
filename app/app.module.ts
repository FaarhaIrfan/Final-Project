import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http';
import {Routes , RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { HousingService } from './service/housing.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AuthService } from './service/Auth.service';


const appRoutes: Routes = [

  {path:'', component : PropertyListComponent},
  {path:'rent-property', component : PropertyListComponent},
  {path:'add-property', component : AddPropertyComponent},
  {path:'property-detail/:id', component : PropertyDetailComponent},
  {path:'**', component : PropertyListComponent},

  {path:'user/login', component : UserLoginComponent},
  {path:'user/register', component : UserRegisterComponent}



]



@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    AddPropertyComponent,
    NavBarComponent,
    ServicesComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [
    HousingService,
    AuthService,

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
