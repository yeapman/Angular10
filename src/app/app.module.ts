import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import {FormsModule} from '@angular/forms';
import {DirectivesComponent} from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
