import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,AngularFormsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
