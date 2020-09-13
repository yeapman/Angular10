import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppCounterService} from './services/app-counter.service';
import { CounterComponent } from './counter/counter.component';
import { Counter2Component } from './counter2/counter2.component';
import { UseAnotherServiceComponent } from './use-another-service/use-another-service.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Counter2Component,
    UseAnotherServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
