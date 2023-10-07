import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { RequiredPipe } from './Pipes/required.pipe'

import { BaseFormComponent } from './base-form/base-form.component';
import { GenerateInfoComponent } from './generate-info/generate-info.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    RequiredPipe,
    GenerateInfoComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
