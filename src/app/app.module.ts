import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import {FormsModule} from '@angular/forms';
import {DirectivesComponent} from './directives/directives.component';
import { JsComponent } from './js/js.component';
import { ComponentFormComponent } from './component-form/component-form.component';
import { NewPostsComponent } from './new-posts/new-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    DirectivesComponent,
    JsComponent,
    ComponentFormComponent,
    NewPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
