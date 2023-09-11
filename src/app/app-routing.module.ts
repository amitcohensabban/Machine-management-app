import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import{HomePageComponent}from './components/home-page/home-page.component';
import { MachineManagementComponent } from './components/machine-management/machine-management.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home-page',component:HomePageComponent,canActivate:[AuthGuard]},
  {path:'machine-management', component: MachineManagementComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
