import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HeaderGuestComponent} from './header-guest/header-guest.component';
import {MainPageBodyComponent} from './main-page-body/main-page-body.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'about-us', component: AppComponent },
  { path: 'download', component: AppComponent },
  { path: 'technical-support', component: AppComponent },
  { path: 'login', component: AppComponent },
  { path: 'signup', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
