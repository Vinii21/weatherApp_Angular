import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CelciusPipe } from './pipes/celcius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    CelciusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
