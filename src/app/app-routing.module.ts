import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { AustraliaComponent } from './components/country/oceania/australia/australia.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './components/login/auth.guard';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { InformationComponent } from './components/information/information.component';
import { loginGuard } from './components/login/login.guard';


const routes: Routes = [
  {path:'',component: IntroductionComponent},
  {path:'login',component: LoginComponent, canActivate:[loginGuard]},
  {path:"add/:userId", component: AddPlaceComponent, canActivate:[authGuard]},
  {path:"information/:userId", component: InformationComponent, canActivate:[authGuard]},
  {path:":continent", component: CountryListComponent},
  {path:":continent/:country", component: AustraliaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
