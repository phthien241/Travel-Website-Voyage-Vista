import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import {MatButtonModule} from '@angular/material/button';
import { AustraliaComponent } from './components/country/oceania/australia/australia.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PlaceListComponent } from './components/country/place-list/place-list.component';
import { InformationComponent } from './components/information/information.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu'
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    CountryListComponent,
    AustraliaComponent,
    PlaceListComponent,
    InformationComponent,
    LoginComponent,
    AddPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatMenuModule,
    MatListModule,
    
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
