import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Hal1Component } from './hal1/hal1.component';
import { Hal2Component } from './hal2/hal2.component';
import { Hal3Component } from './hal3/hal3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Hal1Component, Hal2Component, Hal3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
