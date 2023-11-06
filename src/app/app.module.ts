import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CelciusPipe } from './pipes/celcius.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { CardErrorComponent } from './components/card-error/card-error.component';
import { ClearIconComponent } from './components/clear-icon/clear-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    CelciusPipe,
    FooterComponent,
    CardErrorComponent,
    ClearIconComponent
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
