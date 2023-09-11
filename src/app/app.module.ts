import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadModule } from '@progress/kendo-angular-upload';

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
import { ImageUploadComponent } from './components/image-upload/image-upload.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopUpComponent,
    LoginComponent,
    HomePageComponent,
    MachineManagementComponent,
    EditMachineComponent,
    ImageUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogsModule,
    BrowserAnimationsModule,FormsModule, ReactiveFormsModule, ButtonsModule, GridModule,UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
