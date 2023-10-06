import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { GenerateInfoComponent } from './generate-info/generate-info.component';
import { RequiredPipe } from './Pipes/required.pipe';
import { SubGenerateInfoComponent } from './sub-generate-info/sub-generate-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    GenerateInfoComponent,
    RequiredPipe,
    SubGenerateInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
