import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AngularFormsComponent } from "./angular-forms/angular-forms.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [AppComponent, AngularFormsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
