import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesService }      from './series/series.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SeriesListComponent    
  ],
  providers: [SeriesService], 
  bootstrap: [AppComponent]
})
export class AppModule {}


