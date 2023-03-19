import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './features/counter/counter.component';
import { DisplayCountComponent } from './features/display-count/display-count.component';
import { CounterActionsComponent } from './features/counter-actions/counter-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DisplayCountComponent,
    CounterActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
