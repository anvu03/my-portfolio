import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {AppRoutingModule} from './app.routing';
import {ResumeComponent} from './resume.component';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
