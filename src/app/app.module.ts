import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import { PostcComponent } from './postc/postc.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
