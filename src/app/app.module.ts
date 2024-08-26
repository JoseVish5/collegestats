import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { ArtsComponent } from './arts/arts.component';
import { ScienceComponent } from './science/science.component';
import { VocationalComponent } from './vocational/vocational.component';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';
import { ScrollView2Component } from './scroll-view2/scroll-view2.component';
import { ScrollView3Component } from './scroll-view3/scroll-view3.component';
import { ScrollView4Component } from './scroll-view4/scroll-view4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EngineeringComponent,
    ArtsComponent,
    ScienceComponent,
    VocationalComponent,
    ScrollViewComponent,
    ScrollView2Component,
    ScrollView3Component,
    ScrollView4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
