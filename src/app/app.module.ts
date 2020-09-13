import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { CheckParallelViewStylesComponent } from './check-parallel-view-styles/check-parallel-view-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionStrategyComponent,
    CheckParallelViewStylesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
