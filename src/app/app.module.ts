import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MachineManagementComponent } from './components/machine-management/machine-management.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopUpComponent,
    LoginComponent,
    HomePageComponent,
    MachineManagementComponent,
    EditMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogsModule,
    BrowserAnimationsModule,FormsModule, ReactiveFormsModule, ButtonsModule, GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
